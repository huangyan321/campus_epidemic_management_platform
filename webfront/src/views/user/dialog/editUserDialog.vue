<template>
  <!-- 修改用户信息对话框 -->
  <el-dialog
    title="修改用户"
    :visible.sync="editUserDialogVisible"
    width="30%"
    @close="$emit('closeDialog')"
  >
    <!-- 内容 -->
    <el-form
      ref="editUserDataRef"
      :model="changedUserData"
      :rules="dialogRules"
      label-width="90px"
    >
      <!-- 用户名 -->
      <el-form-item label="用户名">
        <el-input v-model="changedUserData.username" disabled />
      </el-form-item>
      <!-- 修改邮箱 -->
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="changedUserData.email" />
      </el-form-item>
      <!-- 修改手机 -->
      <el-form-item label="手机" prop="mobile">
        <el-input v-model="changedUserData.mobile" />
      </el-form-item>
    </el-form>
    <!-- 底部 -->
    <span slot="footer">
      <el-button @click="$emit('closeDialog')">取 消</el-button>
      <el-button
        type="primary"
        @click="savaChangeUser(changedUserData)"
      >修 改</el-button>
    </span>
  </el-dialog>
</template>
<script>
import { saveUserInfo } from "@/api/user";
export default {
  name: "EditUserDialog",
  props: {
    editUserDialogVisible: {
      type: Boolean,
      default: () => false,
    },
    changedUserData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      // 添加用户的验证规则
      dialogRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "change" },
        ],
        email: [
          {
            required: true,
            message: "请输入邮箱",
            trigger: "blur",
          },
        ],
        mobile: [
          {
            required: true,
            message: "请输入手机",
            trigger: "blur",
          },
          { min: 11, max: 11, message: "11位数字", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    // 对话框关闭后将输入内容清空
    changUserDialogClosed() {
      this.$refs.editUserDataRef.resetFields();
    },
    // 对话框添加用户前预校验
    // 保存编辑的用户
    savaChangeUser(changedUserData) {
      this.$refs.editUserDataRef.validate(async(valid) => {
        if (!valid) return;
        const res = await saveUserInfo(changedUserData.id, changedUserData);
        res.meta.status === 200
          ? (() => {
            this.$emit("successEdit", false);
            this.$notify.success("请求成功");
          })()
          : this.$notify.error(res.meta.msg);
      });
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
