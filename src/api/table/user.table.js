import request from '@/plugin/axios'
export function userList (data) {
  return request({
    url: 'userlist',
    method: 'post',
    data
  })
}
