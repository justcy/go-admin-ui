import request from '@/utils/request'

// 查询DesignTask列表
export function listDesignTask(query) {
  return request({
    url: '/api/v1/design-task',
    method: 'get',
    params: query
  })
}

// 查询DesignTask详细
export function getDesignTask(id) {
  return request({
    url: '/api/v1/design-task/' + id,
    method: 'get'
  })
}

// 新增DesignTask
export function addDesignTask(data) {
  return request({
    url: '/api/v1/design-task',
    method: 'post',
    data: data
  })
}

// 修改DesignTask
export function updateDesignTask(data) {
  return request({
    url: '/api/v1/design-task/' + data.id,
    method: 'put',
    data: data
  })
}

// 删除DesignTask
export function delDesignTask(data) {
  return request({
    url: '/api/v1/design-task',
    method: 'delete',
    data: data
  })
}

