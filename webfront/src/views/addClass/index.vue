<template>
  <div>
    <el-input v-model="msg"></el-input>
    <button @click="send">发消息</button>
    <button @click="close">断开</button>
    <button @click="reconnect">重连</button>
  </div>
</template>

<script>
import { socket } from "@/utils/socket";
export default {
  data() {
    return {
      msg: "",
    };
  },
  mounted() {
    let _that = this;
    socket.init();
    socket.websock.onmessage = function (e) {
      _that.receive(e);
    };
  },
  methods: {
    send() {
      socket.send({ test: this.msg }, () => {
        console.log("回调");
      });
    },
    close() {
      socket.close();
    },
    reconnect() {
      socket.reconnect();
    },
    receive(message) {
     var msg = message.data.
     console.log(msg);
      TODO
    },
  },
  beforeDestroy() {
    this.close();
  },
};
</script>
<style lang="scss" scoped>
</style>