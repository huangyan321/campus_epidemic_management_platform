<template>
  <!-- 删除用户对话框 -->
  <el-dialog
    title="删除用户"
    :visible.sync="deleteUserDialogVisible"
    width="30%"
    @close="$emit('closeDialog')"
  >
    <span>确定删除该用户?</span>
    <span slot="footer">
      <el-button
        type="primary"
        @click="$emit('closeDialog')"
      >取 消</el-button>
      <el-button @click="sureDeleteUser()">确 定</el-button>
    </span>
  </el-dialog>
</template>
<script>
import { deleteThisUserInfo } from "@/api/user";
export default {
  name: "DeleteUserDialog",
  props: {
    deleteUserDialogVisible: {
      type: Boolean,
      default: () => false
    },
    deleteUserId: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
    }
  },
  methods: {
  // 确定删除用户
    async sureDeleteUser() {
      const res = await deleteThisUserInfo(this.deleteUserId);
      res.meta.status === 200
        ? (() => {
          this.$emit('successDelete',false)
          this.$notify.success("请求成功");
        })()
        : this.$notify.error(res.meta.msg);
    },
  },
}
</script>
<style lang="scss" scoped>
</style>
