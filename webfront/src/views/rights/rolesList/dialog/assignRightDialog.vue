<template>
  <!-- 分配权限对话框 -->
  <el-dialog
    title="分配权限"
    :visible.sync="showRightDialogVisible"
    width="50%"
    @close="ShowRightDialogClosed"
  >
    <!-- 树形控件 -->
    <el-tree
      ref="treeRef"
      :data="rightsList"
      :props="rightsListProps"
      show-checkbox
      node-key="id"
      default-expand-all
      :default-checked-keys="defKeys"
    />
    <span slot="footer" class="dialog-footer">
      <el-button @click="$emit('closeDialog')">取 消</el-button>
      <el-button type="primary" @click="addRightsList">确 定</el-button>
    </span>
  </el-dialog>
</template>
<script>
import {
  addRight,
} from "@/api/rights";
export default {
  name: "AssignRightDialog",
  props: {
    showRightDialogVisible: {
      type: Boolean,
      default: () => false,
    },
    rightsList: {
      type: Array,
      default: () => []
    },
    defKeys: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      rightsListProps: {
        label: "authName",
        children: "children",
      },
    };
  },
  mounted() {},
  methods: {
    // 为角色增加权限
    async addRightsList() {
      const checkId = [
        ...this.$refs.treeRef.getCheckedKeys(),
        ...this.$refs.treeRef.getHalfCheckedKeys(),
      ];
      const str = checkId.join(",");
      const res = await addRight(this.roleId, str);
      res.meta.status === 200
        ? (() => {
          this.$emit("successAssign", false);
          this.$notify.success("分配成功");
        })()
        : this.$notify.err(res.meta.msg);
    },
    ShowRightDialogClosed() {
      this.$emit('closeDialog')
    }
  },
};
</script>
<style lang="scss" scoped>
</style>
