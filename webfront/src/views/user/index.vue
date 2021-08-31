<template>
  <div id="users">
    <!-- 卡片区域 -->
    <el-card class="box-card">
      <!-- 搜索框区域 -->
      <div style="margin-top: 15px" />
      <el-row :gutter="20">
        <el-col
          :span="9"
        ><el-input
          v-model="queryInfo.query"
          placeholder="请输入内容"
          clearable
          @clear="getUsersList"
        >
          <el-button
            slot="append"
            icon="el-icon-search"
            @click="getUsersList"
          /> </el-input></el-col>
        <el-col
          :span="6"
        ><el-button
          type="primary"
          @click="addDialogVisible = true"
        >添加用户</el-button></el-col>
      </el-row>
      <!-- 用户列表区域 -->
      <template>
        <el-table :data="usersList" style="width: 100%" stripe border>
          <el-table-column type="index" />
          <el-table-column prop="username" label="用户" />
          <el-table-column prop="sex" label="性别" />
          <el-table-column prop="address" label="住址" />
          <el-table-column prop="classes" label="班级" />
          <el-table-column label="状态">
             <template slot-scope="scope">
              <span>{{scope.row.type === 1 ? "管理员" : scope.row.type === 2 ? "学生" : "教师"}}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <div class="top">
                <!-- 编辑按钮 -->
                <el-button
                  type="primary"
                  icon="el-icon-edit"
                  size="mini"
                  @click="changeUserDialog(scope.row.id)"
                />

                <!-- 删除按钮 -->

                <el-button
                  type="danger"
                  icon="el-icon-delete"
                  size="mini"
                  @click="userDelet(scope.row.id)"
                />

                <!-- 设置按钮 -->

                <el-tooltip
                  class="tooltip"
                  effect="dark"
                  content="分配角色"
                  placement="top"
                >
                  <el-button
                    type="warning"
                    icon="el-icon-setting"
                    size="mini"
                    @click="assignRoles(scope.row)"
                  />
                </el-tooltip>
              </div>

              <!-- 编辑按钮 -->
            </template>
          </el-table-column>
        </el-table>
      </template>
      <!-- 分页区域 -->
      <el-pagination
        :current-page="queryInfo.pagenum"
        :page-sizes="[1, 2, 5, 10]"
        :page-size="queryInfo.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </el-card>
    <add-user-dialog
      :add-dialog-visible="addDialogVisible"
      :dialog-rule-form="dialogRuleForm"
      @successAdd="successAddUser"
      @closeDialog="addDialogVisible = false"
    />
    <edit-user-dialog
      :edit-user-dialog-visible="editUserDialogVisible"
      :changed-user-data="changedUserData"
      @successEdit="successEditUser"
      @closeDialog="editUserDialogVisible = false"
    />
    <deleteUserDialog
      :delete-user-dialog-visible="deleteUserDialogVisible"
      :delete-user-id="deleteUserId"
      @successDelete="successDeleteUser"
      @closeDialog="deleteUserDialogVisible = false"
    />
    <assign-user-dialog
      :assing-role-visible="assingRoleVisible"
      :user-info="userInfo"
      :roles-list="rolesList"
      @successAssign="successAssignUser"
      @closeDialog="assingRoleVisible = false"
    />
  </div>
</template>

<script>
import {
  fetchUserList,
  fetchUserPageList,
  getThisUserInfo,
  getAllRolesList,
} from "@/api/user";
import addUserDialog from "./dialog/addUserDialog.vue";
import editUserDialog from "./dialog/editUserDialog.vue";
import deleteUserDialog from "./dialog/deleteUserDialog.vue";
import assignUserDialog from "./dialog/assignUserDialog.vue";
export default {
  name: "Users",
  components: {
    addUserDialog,
    deleteUserDialog,
    editUserDialog,
    assignUserDialog,
  },
  data() {
    return {
      queryInfo: {
        type: 3,
        currPage: 0,
        pageSize: 5,
      },
      usersList: [],
      total: 0,
      // 控制添加用户对话框的显示与隐藏
      addDialogVisible: false,
      editUserDialogVisible: false,
      deleteUserDialogVisible: false,
      // 添加用户的表单对象
      dialogRuleForm: {
        username: null,
        password: null,
        email: null,
        mobile: null,
      },
      // 编辑的当前用户的数据
      changedUserData: {},
      // 当前选择删除的用户id
      deleteUserId: null,
      // 控制分配角色对话框的显示与隐藏
      assingRoleVisible: false,
      userInfo: {},
      rolesList: [],
    };
  },
  created() {
    this.getUsersList();
  },
  computed: {

  },
  methods: {
    // 更新页面数据
    async getUsersList() {
      const res = await fetchUserList(this.queryInfo);
      res.meta.status === 200
        ? (() => {
          this.total = res.data.total;
          this.usersList = res.data.data;
        })()
        : this.$notify.error(res.meta.msg);
    },
    // 监听pagesize改变的事件
    handleSizeChange(newSize) {
      this.queryInfo.pagesize = newSize;
      this.getUsersList();
    },
    // 监听页码值改变的事件
    handleCurrentChange(newPage) {
      this.queryInfo.pagenum = newPage;
      this.getUsersList();
    },
    async userStateChanged(changeValue) {
      const res = await fetchUserPageList(changeValue.id, changeValue.mg_state);
      res.meta.status === 200
        ? this.$notify.success("请求成功")
        : this.$notify.error(res.meta.msg);
    },
    successAddUser(status) {
      this.getUsersList();
      this.addDialogVisible = status;
    },
    successDeleteUser(status) {
      this.getUsersList();
      this.deleteUserDialogVisible = status;
    },
    successEditUser(status) {
      this.getUsersList();
      this.editUserDialogVisible = status;
    },
    successAssignUser(status) {
      this.getUsersList();
      this.assingRoleVisible = status;
    },
    // 编辑对话框处理
    async changeUserDialog(id) {
      const res = await getThisUserInfo(id);
      res.meta.status === 200
        ? (() => {
          this.changedUserData = res.data;
        })()
        : this.$notify.error(res.meta.msg);
      this.editUserDialogVisible = true;
    },
    // 删除用户
    userDelet(id) {
      this.deleteUserId = id;
      this.deleteUserDialogVisible = true;
    },
    // 获取所有角色列表
    async assignRoles(role) {
      this.userInfo = role;
      const res = await getAllRolesList("roles");
      res.meta.status === 200
        ? (() => {
          this.rolesList = res.data;
        })()
        : this.$notify.error(res.meta.msg);
      this.assingRoleVisible = true;
    },
  },
};
</script>

<style scoped>
#users {
  height: 16rem;
}
.text {
  font-size: 14px;
}

.top {
  text-align: center;
}
.tooltip {
  width: 44px;
  height: 28px;
}
.box-card {
  position: relative;
  margin-top: 0.2rem;
  height: 16rem;
}

</style>
