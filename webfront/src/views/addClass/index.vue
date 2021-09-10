<template>
  <div>
    <el-input v-model="msg"></el-input>
    <button @click="send">发消息</button>
    <button @click="close">断开</button>
    <button @click="reconnect">重连</button>
    <el-input v-model="res"></el-input>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      msg: "",
      res: null
    };
  },
  mounted() {
    this.socket
      ? ""
      : (() => {
          this.$store.dispatch("socket/socketInit");
          this.socket.wsInit();
        })();
      this.socket.webSock.onmessage = async (e) => {
       const {msg:res} = await this.socket.wsReceive(e)
       this.res = res
      }
  },
  computed: {
    ...mapGetters(["classes", "socket"]),
  },
  methods: {
    send() {
      this.socket.wsSend(this.msg)
    },
    close() {
      this.socket.wsClose()
    },
    reconnect() {
      this.socket.wsReconnect()
    },
    
  },
};
</script>
<style lang="scss" scoped>
</style>