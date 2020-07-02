import request from '@/plugin/axios'
export function MyDelete (data, url) {
  return request({
    url: url,
    method: 'post',
    data
  })
}
