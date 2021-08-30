<template>
  <!-- 角色添加对话框 -->
  <el-dialog
    title="添加角色"
    :visible.sync="addRoleDialogVisible"
    width="30%"
    @close="addRoleDialogClosed"
  >
    <!-- 对话框主体部分 -->
    <el-form
      ref="addRoleDialogFormRef"
      :model="addRoleDialogForm"
      :rules="addRoleDialogRules"
      label-width="90px"
    >
      <!-- 添加角色名称区域 -->
      <el-form-item label="角色名称" prop="roleName">
        <el-input v-model="addRoleDialogForm.roleName" />
      </el-form-item>
      <!-- 添加角色描述区域 -->
      <el-form-item label="角色描述" prop="roleDesc">
        <el-input v-model="addRoleDialogForm.roleDesc" />
      </el-form-item>
    </el-form>
    <!-- 对话框底部 -->
    <span slot="footer" class="dialog-footer">
      <el-button @click="$emit('closeDialog')">取 消</el-button>
      <el-button type="primary" @click="sureAddRole">确 定</el-button>
    </span>
  </el-dialog>
</template>
<script>
import {
  addRole,
} from "@/api/rights";
export default {
  name: "AddRoleDialog",
  props: {
    addRoleDialogVisible: {
      type: Boolean,
      default: () => false
    }
  },
  data() {
    return {
      addRoleDialogForm: {
        roleName: "",
        roleDesc: "",
      },
      addRoleDialogRules: {
        roleName: [
          { required: true, message: "请输入角色名称", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        roleDesc: [
          { required: true, message: "请输入角色描述", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
      },
    }
  },
  methods: {
    // 关闭对话框清空内容
    addRoleDialogClosed() {
      this.$emit('closeDialog');
      this.$refs.addRoleDialogFormRef.resetFields();
    },
    // 确认添加角色
    sureAddRole() {
      this.$refs.addRoleDialogFormRef.validate(async(valid) => {
        if (!valid) {
          return;
        }
        const res = await addRole(this.addRoleDialogForm);
        res.meta.status === 201
          ? (() => {
            this.$emit("successAdd", false);
            this.$notify.success("添加成功");
          })()
          : this.$notify.error(res.meta.msg);
      });
    },
  },
}
</script>
<style lang="scss" scoped>
</style>
