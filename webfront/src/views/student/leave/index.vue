<template>
  <div id="notice">
    <el-card class="title-card">
      <div slot="header" class="clearfix">
        <span class="title">填写假条</span>
      </div>
      <el-form ref="leaveRef" :model="leaveInfo" :rules="rules">
        <el-row :gutter="20" type="flex" justify="start">
          <el-col :span="5"
            ><div>
              <el-form-item prop="leavetype">
                <el-select v-model="leaveInfo.leavetype" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item></div
          ></el-col>
        </el-row>
        <el-row :gutter="20" type="flex" justify="start">
          <el-col :span="5"
            ><div>
              <el-form-item prop="starttime">
                <el-date-picker
                  v-model="leaveInfo.starttime"
                  type="daterange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  format="yyyy年MM月dd日"
                  value-format="yyyy-MM-dd 00:00:00"
                >
                </el-date-picker>
              </el-form-item></div
          ></el-col>
        </el-row>
        <el-row :gutter="20" type="flex" justify="start">
          <el-col :span="24"
            ><div>
              <el-form-item prop="reason">
                <el-input
                  type="textarea"
                  :rows="4"
                  placeholder="请输入请假事由"
                  v-model="leaveInfo.reason"
                  resize="none"
                  maxlength="100"
                  show-word-limit
                >
                </el-input
              ></el-form-item></div
          ></el-col>
        </el-row>
        <el-row :gutter="20" type="flex" justify="end">
          <el-col :span="2.5"
            ><div>
              <el-button type="primary" @click.stop="leaveApply"
                >发起申请<i class="el-icon-upload el-icon--right"></i
              ></el-button></div
          ></el-col>
        </el-row>
      </el-form>
    </el-card>
    <el-divider><i v-show="loading" class="el-icon-loading"></i></el-divider>
    <el-card class="box-card">
      <div class="text item">
        <!-- 用户列表区域 -->
        <template>
          <el-table :data="leaveList" stripe border>
            <el-table-column prop="createtime" label="申请时间" sortable />
            <el-table-column prop="leavetype" label="类型" />
            <el-table-column prop="reason" label="详细信息" />
            <el-table-column prop="state" label="审核结果" :formatter="resFormatter" />
          </el-table>
        </template>
        <!-- 分页区域 -->
        <el-pagination
          :current-page="queryInfo.currPage"
          :page-sizes="[1, 2, 5, 10]"
          :page-size="queryInfo.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </el-card>
  </div>
</template>
<script>
import { setLeave } from "@/api/student";
import { getuserLeave } from "@/api/admin";
import { mapGetters } from "vuex";
export default {
  name: "index",
  created() {
    this.getuserLeave();
  },
  mounted() {},

  data() {
    return {
      loading: false,
      queryInfo: {
        currPage: 1,
        pageSize: 5,
      },
      total: 0,
      leaveList: null,
      leaveInfo: {
        reason: "",
        leavetype: "",
        starttime: "",
        endtime: "",
      },
      options: [
        {
          value: "事假",
          label: "事假",
        },
        {
          value: "病假",
          label: "病假",
        },
        {
          value: "调休假",
          label: "调休假",
        },
      ],
      rules: {
        leavetype: [
          { required: true, message: "请输入请假类型", trigger: "blur" },
        ],
        starttime: [
          { required: true, message: "请选择请假时间", trigger: "blur" },
        ],
        reason: [
          { required: true, message: "请输入请假事由", trigger: "blur" },
        ],
      },
    };
  },
  computed: {
    ...mapGetters(["classes"]),
  },
  methods: {
    async getuserLeave() {
      this.loading = true;
      const res = await getuserLeave(this.queryInfo);
      res.meta.status === 200
        ? (() => {
            this.total = res.data.total;
            this.leaveList = res.data.data;
            this.loading = false;
          })()
        : this.$notify.error(res.meta.msg);
    },
    async leaveApply() {
      this.$refs.leaveRef.validate(async (valid) => {
        if (!valid) return;
        this.loading = true;
        this.leaveInfo.endtime = this.leaveInfo.starttime.pop();
        this.leaveInfo.starttime = this.leaveInfo.starttime.toString();
        let res = await setLeave(this.leaveInfo);
        res.meta.status === 200
          ? (() => {
              this.$notify.success(res.meta.msg);
              this.getuserLeave();
            })()
          : this.$notify.error(res.meta.msg);
      });
    },
    async noticeDel(row) {
      let res = await noticeDel({ n_id: row.n_id });
      res.meta.status === 200
        ? (() => {
            this.$notify.success(res.meta.msg);
            this.getNotice();
          })()
        : this.$notify.error(res.meta.msg);
    },
    handleSizeChange(pageSize) {
      this.queryInfo.pageSize = pageSize;
      this.getNotice();
    },
    handleCurrentChange(currPage) {
      this.queryInfo.currPage = currPage;
      this.getNotice();
    },
    resFormatter(row,col) {
      return row.state === 0 ? "未审批" : row.state === 1 ? "审批不通过" : "审批通过"
      TODO
    }
  },
};
</script>
<style lang="scss" scoped>
#notice {
  height: 100%;
}
.title {
  font-size: 0.4rem;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.title-card {
  width: 60%;
  height: auto;
  min-height: 4rem;
  margin: 0.5rem auto;
}
.box-card {
  width: 60%;
  min-height: 5rem;
  margin: 0.5rem auto;
}
</style>