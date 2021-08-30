<template>
  <div id="roles">
    <el-card>
      <!-- 添加角色按钮 -->
      <el-row>
        <el-col>
          <el-button type="primary" @click="addRole">添加角色</el-button>
        </el-col>
      </el-row>
      <el-table :data="roleList" border stripe>
        <el-table-column type="expand">
          <template slot-scope="scope">
            <el-row
              v-for="(item0, index0) in scope.row.children"
              :key="item0.id"
              :class="['bdbottom', index0 === 0 ? 'bdtop' : '']"
              class="vcenter"
            >
              <!-- 渲染一级权限 -->
              <el-col :span="5">
                <el-tag closable @close="removeRights(scope.row, item0.id)">{{
                  item0.authName
                }}</el-tag>
                <i class="el-icon-caret-right" />
              </el-col>
              <!-- 渲染二三级权限 -->
              <el-col :span="19">
                <el-row
                  v-for="(item1, index1) in item0.children"
                  :key="item1.id"
                  :class="['bdtop', index1 === 0 ? '' : 'bdtop']"
                  class="vcenter"
                >
                  <!-- 二级权限展示区域 -->
                  <el-col :span="6">
                    <el-tag
                      type="success"
                      closable
                      @close="removeRights(scope.row, item1.id)"
                    >{{ item1.authName }}</el-tag>
                    <i class="el-icon-caret-right" />
                  </el-col>
                  <!-- 三级权限展示区域 -->
                  <el-col :span="18">
                    <el-tag
                      v-for="item2 in item1.children"
                      :key="item2.id"
                      type="warning"
                      closable
                      @close="removeRights(scope.row, item2.id)"
                    >
                      {{ item2.authName }}</el-tag>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </template>
        </el-table-column>
        <el-table-column type="index" />
        <el-table-column label="角色名称" prop="roleName" />
        <el-table-column label="角色描述" prop="roleDesc" />
        <el-table-column label="操作" width="300px">
          <template slot-scope="scope">
            <el-button
              type="primary"
              icon="el-icon-edit"
              size="mini"
            >编辑</el-button>
            <el-button
              type="danger"
              icon="el-icon-delete"
              size="mini"
              @click="roleDelete(scope.row.id)"
            >删除</el-button>
            <el-button
              type="warning"
              icon="el-icon-setting"
              size="mini"
              @click="ShowRightDialog(scope.row)"
            >分配权限</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <addRoleDialog
      :add-role-dialog-visible="addRoleDialogVisible"
      @successAdd="successAddRole"
      @closeDialog="addRoleDialogVisible = false"
    />
    <assignRightDialog
      :show-right-dialog-visible="showRightDialogVisible"
      :rights-list="rightsList"
      :def-keys="defKeys"
      @successAssign="successAssignRole"
      @closeDialog="ShowRightDialogClosed"
    />
  </div>
</template>

<script>
import {
  getRolesInfo,
  deleteRole,
  deleteRight,
  getRightsTree,
} from "@/api/rights";
import addRoleDialog from "./dialog/addRoleDialog.vue";
import assignRightDialog from "./dialog/assignRightDialog.vue";
export default {
  name: "Roles",
  components: {
    addRoleDialog,
    assignRightDialog,
  },
  data() {
    return {
      roleList: [],
      addRoleDialogVisible: false,
      // 分配权限对话框的隐藏于展示
      showRightDialogVisible: false,
      rightsList: [],
      defKeys: [],
      roleId: "",
    };
  },
  created() {
    this.getRolesList();
  },
  methods: {
    // 获取角色数据
    async getRolesList() {
      const res = await getRolesInfo();
      res.meta.status === 200
        ? (() => {
          this.roleList = res.data;
        })()
        : this.$notify.error(res.meta.msg);
    },
    addRole() {
      this.addRoleDialogVisible = true;
    },
    successAddRole(status) {
      this.addRoleDialogVisible = status;
      this.getRolesList();
    },
    successAssignRole(status) {
      this.showRightDialogVisible = status;
      this.getRolesList();
    },
    // 删除角色
    roleDelete(id) {
      this.$confirm("此操作将永久删除该角色, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async() => {
          const res = await deleteRole(id);
          res.meta.status === 200
            ? (() => {
              this.getRolesList();
              this.$notify.success("删除成功");
            })()
            : this.$notify.error(res.meta.msg);
        })
        .catch(() => {});
    },
    // 删除指定的权限
    removeRights(role, rightsId) {
      this.$confirm("是否永久解除该权限？", "权限删除", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async() => {
          const res = await deleteRight(role.id, rightsId);
          res.meta.status === 200
            ? (() => {
              role.children = res.data;
              this.$notify.success("请求成功");
            })()
            : this.$notify.error(res.meta.msg);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    // 获取权限对话框
    async ShowRightDialog(role) {
      const res = await getRightsTree();
      if (res.meta.status !== 200) {
        return this.$message.error("获取权限失败!");
      } else {
        this.rightsList = res.data;
        this.roleId = role.id;
      }
      // 利用递归获取三级权限的id
      this.getDefKeys(role, this.defKeys);
      this.showRightDialogVisible = true;
    },
    // 利用递归获取三级权限的id，并保存到defKeys 数组中
    getDefKeys(node, arr) {
      if (!node.children) {
        return arr.push(node.id);
      }
      node.children.forEach((item) => {
        this.getDefKeys(item, arr);
      });
    },
    // 对话框关闭时时清空defKeys数组
    ShowRightDialogClosed() {
      this.showRightDialogVisible = false
      this.defKeys = [];
    }
  },
};
</script>

<style scoped>
.bdbottom {
  border-bottom: 1px solid #eee;
}
.bdtop {
  border-top: 1px solid #eee;
}
.vcenter {
  padding: 0.1rem 0.05rem;
  display: flex;
  align-items: center;
}
.el-tag {
  margin-left: 0.5rem;
}
.el-input {
  position: relative;
  width: 85%;
}
</style>
