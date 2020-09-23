<template>
  <div>
    <d2-crud
             ref="d2Crud"
             :pagination="pagination"
             :columns="columns"
             :data="data"
             add-title="新增用户"
             :add-rules="addRules"
             :add-template="addTemplate"
             :form-options="formOptions"
             @row-add="handleRowAdd"
             @pagination-current-change="paginationCurrentChange"
             @dialog-cancel="handleDialogCancel">
      <el-input slot="header"  v-model="username"  placeholder="请输入用户账号" style="margin-top:10px;margin-bottom: 5px;width:200px;margin-left:5px;" />
      <el-button slot="header" @click="search" style="margin-bottom: 5px;margin-left:10px;">搜索</el-button>
      <el-button slot="header" @click="table_reset" style="margin-bottom: 5px;margin-left:20px;">清空</el-button>
      <el-button slot="header" type="success" style="position: absolute;top:10px;right:50px;" @click="addRow">新增</el-button>
    </d2-crud>
  </div>
</template>
<script>
import { userList } from '@/api/table/user.table'
import { MySubmit } from '@/api/common/submit'
import { MyDelete } from '@/api/common/delete'
import bus from '@/api/common/bus'
import  status_button  from '@/api/button/status_button'
export default {
  components: {
    status_button
  },
  data () {
    return {
      username: '',
      columns: [
        {
          title: 'id',
          key: 'id',
          width: 100
        },
        {
          title: '用户名',
          key: 'username',
          align: 'center'
        },
        {
          title: '邮箱',
          key: 'email',
          align: 'center'
        },
        {
          title: '状态',
          key: 'status_text',
          align: 'center'
        },
        {
          title: '注册时间',
          key: 'created_at',
          align: 'center'
        },
        {
          title: '操作',
          key: 'check',
          align: 'center',
          component: {
            name: status_button,
            props: {
              myProps: this.$refs.d2Crud
            }
          }
        }
      ],
      addTemplate: {
        username: {
          title: '用户名',
          value: ''
        },
        email: {
          title: '邮箱',
          value: ''
        },
        password: {
          title: '密码'
        },
        password_confirmation: {
          title: '确认密码'
        }
      },
      formOptions: {
        labelWidth: '80px',
        labelPosition: 'left',
        saveLoading: false
      },
      addRules: {
        username: [ { required: true, message: '请输入用户名', trigger: 'blur' } ],
        email: [ { type: "email", required: true, message: '请输入正确的邮箱地址', trigger: 'blur' } ],
        password: [ { required: true, message: '请输入密码', trigger: 'blur' } ],
        password_confirmation: [ { required: true, message: '请输入确认密码', trigger: 'blur' } ]
      },
      data: [],
      loading: false,
      pagination: {
        currentPage: 1,
        pageSize: 5,
        total: 0
      }
    }
  },
  mounted () {
    this.fetchData()
  },
  created () {
    bus.$on('reload', item => {
      this.fetchData()
    })
  },
  methods: {
    // 普通的新增
    addRow () {
      this.$refs.d2Crud.showDialog({
        mode: 'add'
      })
    },
    handleRowAdd (row, done) {
      this.formOptions.saveLoading = true
      MySubmit(row, 'user/status')
        .then(res => {
          // 成功
          setTimeout(() => {
            this.$message({
              message: res.msg,
              type: 'success'
            })
            done()
            this.formOptions.saveLoading = false
            this.fetchData()
          }, 300)
        })
        .catch(err => {
          // 失败
          this.formOptions.saveLoading = false
        })
    },
    handleDialogCancel (done) {
      done()
    },
    paginationCurrentChange (currentPage) {
      console.log(currentPage)
      this.pagination.currentPage = currentPage
      this.fetchData()
    },
    fetchData () {
      this.loading = true
      userList({
        ...this.pagination, username: this.username
      }).then(res => {
        this.data = res.data
        this.pagination.total = res.total
        this.loading = false
      }).catch(err => {
        console.log('err', err)
        this.loading = false
      })
    },
    search () {
      this.fetchData()
    },
    table_reset () {
      this.username = ''
      this.fetchData()
    }
  }
}
</script>
