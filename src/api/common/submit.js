import request from '@/plugin/axios'
export function MySubmit (data, url) {
  return request({
    url: url,
    method: 'post',
    data
  })
}
