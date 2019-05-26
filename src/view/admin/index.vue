<template>
  <div>
    Admin
    <hr/>
    {{msg}}
    <el-table :border="true" :data="adminList">
      <el-table-column label="ID" prop="id" width="50px"></el-table-column>
      <el-table-column label="用户名" prop="username" width="100px"></el-table-column>
      <el-table-column label="昵称" prop="nickname" width="120px"></el-table-column>
      <el-table-column label="email" prop="email"></el-table-column>
      <el-table-column label="手机号" prop="phone"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <br/>
    <!--分页功能-->
    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageInfo.pageNo"
      :page-sizes="pageInfo.pageSizes"
      :page-size="pageInfo.pageSize"
      :total="pageInfo.total"
      layout="total, sizes, prev, pager, next, jumper">
    </el-pagination>
  </div>
</template>

<script>
    export default {
      name: "index",
      data(){
        return{
          msg:''
        }
      },
      computed:{
        adminList:function () {
          return this.$store.getters['admin/adminList'];
        },
        pageInfo:function () {
          return this.$store.getters['admin/pageInfo'];
        }
      },
      methods:{
        handleEdit(index, row) {
          console.log(index, row.id);
        },
        handleDelete(index, row) {
          console.log(row.id);
          this.$store.dispatch('admin/deleteAdmin',row.id);
        },

        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
          this.$store.dispatch('admin/changePage',{
            pageSize:val
          });
        },
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
          this.$store.dispatch('admin/changePage',{
            pageNo:val
          });
        }
      },
      mounted() {
        this.$store.dispatch('admin/list',{page:1,pageSize:5});
      }
    }
</script>

<style scoped>

</style>
