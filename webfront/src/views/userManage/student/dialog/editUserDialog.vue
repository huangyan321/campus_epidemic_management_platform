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
      <!-- 修改性别 -->
      <el-form-item label="性别" prop="sex">
        <el-input v-model="changedUserData.sex" />
      </el-form-item>
      <!-- 修改用户等级 -->
      <el-form-item label="用户等级" prop="type">
        <el-select v-model="changedUserData.type" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <!-- 修改地址 -->
      <el-form-item label="地址" prop="address">
        <el-input v-model="changedUserData.address" />
      </el-form-item>
    </el-form>
    <!-- 底部 -->
    <span slot="footer">
      <el-button @click="$emit('closeDialog')">取 消</el-button>
      <el-button type="primary" @click="savaChangeUser(changedUserData)"
        >修 改</el-button
      >
    </span>
  </el-dialog>
</template>
<script>
import { upDataUserInfo } from "@/api/user";
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
        sex: [{ required: true, message: "请输入密码", trigger: "change" }],
        type: [
          {
            required: true,
            message: "请输入",
            trigger: "blur",
          },
        ],
        address: [
          {
            required: true,
            message: "请输入",
            trigger: "blur",
          },
        ],
      },
      options: [
        {
          value: "1",
          label: "管理员",
        },
        {
          value: "2",
          label: "学生",
        },
        {
          value: "3",
          label: "教师",
        },
      ],
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
      this.$refs.editUserDataRef.validate(async (valid) => {
        if (!valid) return;
        const res = await upDataUserInfo(changedUserData);
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
