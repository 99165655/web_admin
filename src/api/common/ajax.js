import ajax from '@/api/common/submit'
/**
 *  所有提交都走一个请求
 *  url ：地址
 *  data : 数据
 *  obj ：表格对象 方便操作
 */
export default function myAjax (url, data) {
//      ajax的then就是你请求成功之后干啥 我想 都在这处理了 外边 啥都不用干就一行就行 那别搞了 我直接用封号的那个把
    ajax(data, url).then(res => {
      console.log(res)
      resolve(res)

      //  这不扯几把蛋么。。。 我心思 连 成功错误 都不用写 就一行带过 js现在请求是异步的
      第一个问题就是 用回调函数去拿查回来的数据 还有一种就是用这种then方式 垃圾 JQ 都行我这个想法用JQ 肯定能实现你可以先撸一个
  // 行吧 拿我就这么写把 没办法 我不想老写 then 你把前台的地址给我  我本地跑一哈子
      /*setTimeout(() => {
        obj.$message({
          message: res.msg,
          type: 'success'
        })
        obj.fetchData()
      }, 300)*/
    })


}

