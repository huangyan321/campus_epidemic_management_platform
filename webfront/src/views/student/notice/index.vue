<template>
  <div id="notice">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span class="title">我的通知</span>
      </div>
      <div class="text item">
        <!-- 用户列表区域 -->
        <template>
          <el-table :data="noticeList"  stripe border >
            <el-table-column prop="n_id" label="序列号" sortable />
            <el-table-column prop="title" label="主题" />
            <el-table-column prop="type" label="状态" />
            <el-table-column prop="createtime" label="创建时间" />
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button type="text">详情</el-button>
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
export default {
  name: "index",
  created() {
    this.getNotice()
  },
  mounted() {},

  data() {
    return {
      queryInfo: {
        currPage: 1,
        pageSize: 5,
      },
      total: 0,
      noticeList: null
    };
  },
  methods: {
    async getNotice() {
      const res = await getNotice(this.queryInfo);
      res.meta.status === 200 ? 
      (() => {
        res.data.data.forEach(item => {
          item.type = "未读"
        })
        this.total = res.data.total
        this.noticeList = res.data.data
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

.box-card {
  width: 60%;
  min-height: 12rem;
  margin: 1.5rem auto;
}
</style>