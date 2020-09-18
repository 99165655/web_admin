<template>
  <div style="cursor: pointer">
    <el-button size="small" :type="type" @click.native="handleClick">{{ text }}</el-button>
    <el-button size="small" type="primary" @click.native="handleClick">编辑</el-button>
    <el-button size="small" type="danger" @click.native="delClick">删除</el-button>
  </div>
</template>

<script>
import { userList } from '@/api/table/user.table'
import { MySubmit } from '@/api/common/submit'
import { MyDelete } from '@/api/common/delete'
import bus from '@/api/common/bus'
export default {
  props: {
    value: {
      type: Boolean,
      require: true
    },
    // 本行的所有数据，此字段不需要额外配置
    scope: {
      default: null
    },
    // 通过 component 中 props 字段传过来的数据，此字段需要先在 component 中配置
    myProps: {
      default: null
    }
  },
  computed: {
    type () {
      return this.scope.row.status ? 'warning' : 'success'
    },
    text () {
      return this.scope.row.status ? '冻结' : '启动'
    }
  },
  methods: {
    delClick (index) {
      MyDelete(this.scope.row, 'user/del')
        .then(res => {
          // 成功
          setTimeout(() => {
            this.$message({
              message: res.msg,
              type: 'success'
            })
            bus.$emit('reload')
          }, 300)
        })
    }
  }
}
</script>
