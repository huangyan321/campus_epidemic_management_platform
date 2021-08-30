<template>
  <div id="Rights">
    <!-- 卡片区域 -->
    <el-card class="box-card">
      <el-table :data="RightsList" style="width: 100%" stripe border>
        <el-table-column type="index" />
        <el-table-column prop="authName" label="权限名称" />
        <el-table-column prop="path" label="路径" />
        <el-table-column prop="level" label="权限等级">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.level == '0'">一级</el-tag>
            <el-tag
              v-else-if="scope.row.level == '1'"
              type="success"
            >二级</el-tag>
            <el-tag
              v-else-if="scope.row.level == '2'"
              type="warning"
            >三级</el-tag>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import { getRightList } from "@/api/rights"
export default {
  name: 'Rights',
  data() {
    return {
      RightType: 'list',
      RightsList: []
    }
  },
  created() {
    this.getRightsList()
  },
  methods: {
    async getRightsList() {
      const res = await getRightList(this.RightType)
      res.meta.status === 200
        ? (() => {
          this.RightsList = res.data
          this.$notify.success("查询成功");
        })()
        : this.$notify.error(res.meta.msg);
    }
  }
}
</script>

<style scoped>
</style>
