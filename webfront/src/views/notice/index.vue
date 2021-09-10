<template>
  <div id="notice">
    <el-card class="title-card">
      <div slot="header" class="clearfix">
        <span class="title">填写通知</span>
      </div>
      <el-form ref="noticeRef" :model="releaseInfo" :rules="rules">
        <el-row
          :gutter="20"
          type="flex"
          justify="center"
          style="margin-top: 0.5rem"
        >
          <el-col :span="5"
            ><div>
              <el-form-item prop="title">
                <el-input
                  placeholder="请输入通知标题"
                  v-model="releaseInfo.title"
                  clearable
                >
                </el-input>
              </el-form-item></div
          ></el-col>

          <el-col :span="5"
            ><div>
              <el-form-item prop="classes">
                <el-select
                  v-model="releaseInfo.classes"
                  multiple
                  placeholder="请选择班级"
                >
                  <el-option
                    v-for="item in classes"
                    :key="item"
                    :label="item"
                    :value="item"
                  >
                  </el-option>
                </el-select>
              </el-form-item></div
          ></el-col>
          <el-col :span="5"
            ><div>
              <el-button type="primary" @click.stop="noticeRel"
                >发布<i class="el-icon-upload el-icon--right"></i
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
          <el-table :data="noticeList" stripe border>
            <el-table-column prop="n_id" label="序列号" sortable />
            <el-table-column prop="title" label="主题" />
            <el-table-column prop="type" label="状态" />
            <el-table-column prop="createtime" label="创建时间" />
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button type="text">详情</el-button>
                <el-button type="text" @click="noticeDel(scope.row)"
                  >删除</el-button
                >
              </template>
            </el-table-column>
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
import { getNotice } from "@/api/student";
import { announce, noticeDel } from "@/api/admin";
import { mapGetters } from "vuex";
export default {
  name: "index",
  created() {
    this.getNotice();
  },
  mounted() {
    this.socket ? "" : this.$store.dispatch("socket/socketInit");
    this.socket.wsInit();
  },

  data() {
    return {
      loading: false,
      queryInfo: {
        currPage: 1,
        pageSize: 5,
      },
      total: 0,
      noticeList: null,
      releaseInfo: {
        title: "",
        classes: "",
      },
      rules: {
        title: [
          { required: true, message: "请输入标题", trigger: "blur" },
          {
            min: 3,
            message: "至少3个字符",
            trigger: "blur",
          },
        ],
        classes: [
          { required: true, message: "至少选择一个班级", trigger: "blur" },
        ],
      },
    };
  },
  computed: {
    ...mapGetters(["classes", "socket"]),
  },
  methods: {
    async getNotice() {
      this.loading = true;
      const res = await getNotice(this.queryInfo);
      res.meta.status === 200
        ? (() => {
            res.data.data.forEach((item) => {
              item.type = "未读";
            });
            this.total = res.data.total;
            this.noticeList = res.data.data;
            this.loading = false;
          })()
        : this.$notify.error(res.meta.msg);
    },
    async noticeRel() {
      this.$refs.noticeRef.validate(async (valid) => {
        if (!valid) return;
        this.loading = true;
        let res = await announce({
          title: this.releaseInfo.title,
          classes: this.releaseInfo.classes.join(";"),
        });
        res.meta.status === 200
          ? (() => {
              this.$notify.success(res.meta.msg);
              this.getNotice();
              this.socket.wsSend({
                type: "notice",
                msg: "有新的通知",
              });
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
.clearfix {
  text-align: center;
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
  height: 4rem;
  margin: 0.5rem auto;
}
.box-card {
  width: 60%;
  min-height: 10rem;
  margin: 0.5rem auto;
}
</style>