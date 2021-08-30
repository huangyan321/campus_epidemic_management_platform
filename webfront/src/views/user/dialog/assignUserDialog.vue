<template>
  <!-- 分配角色对话框 -->
  <el-dialog
    title="分配角色"
    :visible.sync="assingRoleVisible"
    width="50%"
    @close="$emit('closeDialog')"
  >
    <p>用户名称: {{ userInfo.username }}</p>
    <p>角色: {{ userInfo.role_name }}</p>
    <p>
      选择角色:
      <el-select v-model="selectedRole" placeholder="请选择角色">
        <el-option
          v-for="item in rolesList"
          :key="item.id"
          :label="item.roleName"
          :value="item.id"
        />
      </el-select>
    </p>
    <span slot="footer" class="dialog-footer">
      <el-button @click="$emit('closeDialog')">取 消</el-button>
      <el-button type="primary" @click="sureAssignRole">确 定</el-button>
    </span>
  </el-dialog>
</template>
<script>
import { rolesAssign } from "@/api/user";
export default {
  name: "AssignUserDialog",
  props: {
    assingRoleVisible: {
      type: Boolean,
      default: () => false,
    },
    userInfo: {
      type: Object,
      default: () => {},
    },
    rolesList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      selectedRole: "",
    };
  },
  methods: {
    // 确定分配角色
    async sureAssignRole() {
      console.log(this.userInfo.id);
      const res = await rolesAssign(this.userInfo.id,this.selectedRole);
      res.meta.status === 200
        ? (() => {
          this.$emit("successAssign", false);
          this.$notify.success("请求成功");
        })()
        : this.$notify.error(res.meta.msg);
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
