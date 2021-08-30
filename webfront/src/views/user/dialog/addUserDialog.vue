<template>
  <!-- 添加用户对话框 -->
  <el-dialog
    title="添加用户"
    :visible.sync="addDialogVisible"
    width="30%"
    @close="$emit('closeDialog')"
  >
    <!-- 对话框主体 -->
    <el-form
      ref="dialogRuleFormRef"
      :model="dialogRuleForm"
      :rules="dialogRules"
      label-width="90px"
    >
      <!-- 添加用户名区域 -->
      <el-form-item label="用户名" prop="username">
        <el-input v-model="dialogRuleForm.username" />
      </el-form-item>
      <!-- 添加 密码区域 -->
      <el-form-item label="密码" prop="password">
        <el-input
          :key="passwordType"
          v-model="dialogRuleForm.password"
          :type="passwordType"
        /><span class="show-pwd" @click="showPwd">
          <svg-icon
            :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"
          />
        </span></el-form-item>
      <!-- 添加邮箱 -->
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="dialogRuleForm.email" />
      </el-form-item>
      <!-- 添加手机 -->
      <el-form-item label="手机" prop="mobile">
        <el-input v-model="dialogRuleForm.mobile" />
      </el-form-item>
    </el-form>
    <!-- 对话框底部 -->
    <span slot="footer" class="dialog-footer">
      <el-button @click="$emit('closeDialog')">取 消</el-button>
      <el-button type="primary" @click="addUser">添 加</el-button>
    </span>
  </el-dialog>
</template>
<script>
import { addUser } from "@/api/user";
export default {
  name: "AddUserDialog",
  props: {
    addDialogVisible: {
      type: Boolean,
      default: () => false,
    },
    dialogRuleForm: {
      type: Object,
      default: () => {
        return {
          username: null,
          password: null,
          email: null,
          mobile: null,
        };
      },
    },
  },
  data() {
    return {
      passwordType: "password",
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
    adddialogclosed() {
      this.$refs.dialogRuleFormRef.resetFields();
    },
    // 对话框添加用户前预校验
    addUser() {
      this.$refs.dialogRuleFormRef.validate(async(valid) => {
        if (!valid) return;
        const res = await addUser(this.dialogRuleForm);
        res.meta.status === 201
          ? (() => {
            this.$emit("successAdd", false);
            this.$notify.success("添加成功");
          })()
          : this.$notify.err(res.meta.msg);
      });
    },
    showPwd() {
      if (this.passwordType === "password") {
        this.passwordType = "";
      } else {
        this.passwordType = "password";
      }
      this.$nextTick(() => {
        this.$refs.password.focus();
      });
    },
  },
};
</script>
<style lang="scss" scoped>
$dark_gray: #889aa4;
.el-input {
  position: relative;
  width: 85%;
}
.show-pwd {
    position: absolute;
    right: 1.5rem;
    top: 0.08rem;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
</style>
