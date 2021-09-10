import {
  Message
} from "element-ui";
import store from "../store"

export default class Socket {
  constructor() {
    //websocket 实例
    this.webSock = null;
    //ws_url
    this.ws_url = "ws://127.0.0.1:3000";
    //开启标识
    this.socket_open = false;
    //心跳timer
    this.hearBeat_timer = null;
    //心跳间隔
    this.hearBeat_interval = 5000;
    //用户id
    this.u_id = store.state.user.roleId;
    //是否重连
    this.is_reconnect = true;
    //重连timer
    this.reconnect_timer = null;
    //重连次数
    this.reconnect_count = 3;
    //已发起重连次数
    this.reconnect_current = 0;
    //重连频率
    this.reconnect_interval = 2000;

  }
  wsInit() {
    if (!("WebSocket" in window)) {
      Message.error('浏览器不支持WebSocket')
      return null
    }
    if (!this.u_id) {
      throw new Error("u_id  is undefined");
    }
    this.webSock ? '' :
      this.webSock = new WebSocket(this.ws_url)

    this.webSock.onclose = (e) => {
      console.log("连接被断开");
      console.log('connection closed (' + e.code + ')');
      clearInterval(this.hearBeat_timer);
      this.socket_open = false;
      if (this.is_reconnect) {
        this.reconnect_timer = setTimeout(() => {
          if (this.reconnect_current > this.reconnect_count) {
            clearTimeout(this.reconnect_timer)
            return
          }
          this.reconnect_current++;
          this.reconnect();
        }, this.reconnect_interval)
      }
    }
    this.webSock.onopen = () => {
      console.log("连接成功");
      this.socket_open = true;
      this.is_reconnect = true;
      this.hearBeat();
    }
    this.webSock.onerror = (err) => {
      console.log(err)
    }
  }
  /**
   * 发送数据
   * @param {*} data 
   * @param {*} cb 
   */
  wsSend = (data, cb = null) => {
    if (this.webSock.readyState === this.webSock.OPEN) {
      this.webSock.send(JSON.stringify({
        data:data,
        id: store.getters.roleId,
        classes: store.getters.classes
      }))
      if (cb) {
        cb()
      }
    } else if (this.webSock.readyState === this.webSock.CONNECTING) {
      setTimeout(() => {
        this.wsSend(data, cb)
      }, 1000);
    } else {
      this.init();
      setTimeout(() => {
        this.wsSend(data, cb)
      }, 1000);
    }
  }
  wsReceive = (msg) => {
    return new Promise((resolve, reject) => {
      console.log(msg.data);
      const params = JSON.parse(msg.data);
      resolve(params)
    })

  }
  /**
   * 心跳
   */
  hearBeat = () => {
    if (this.hearBeat_timer) clearTimeout(this.hearBeat_timer);
    this.hearBeat_timer = setTimeout(() => {
      if (this.socket_open) {
        console.log("ping...");
        this.wsSend({
          type: 'heart',
          msg: '心跳循环',
        })
        this.hearBeat();
      } else {
        console.log("心跳过程中连接断开");
      }
    }, this.hearBeat_interval);
  }
  /**
   * 主动断开连接
   */
  wsClose = () => {
    console.log("主动断开连接");
    clearInterval(this.hearBeat_interval);
    this.is_reconnect = false;
    this.webSock.close();
  }
  /**
   * 重连
   */
  wsReconnect() {
    if (this.webSock) {
      console.log(`重新连接第${this.reconnect_current}次..`);
      this.wsInit()
    } else {
      Message.error('实例状态异常')
      this.webSock.close()
    }
  }
}
