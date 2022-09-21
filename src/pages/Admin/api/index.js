import { baseRequest } from 'configs'

// admin / workers ===============================
export const getAdmin = () => {
  return baseRequest.get('/admin.json')
}

export const getWorkers = () => {
  return baseRequest.get('/workers.json')
}

export const getWorker = (id) => {
  return baseRequest.get(`/workers/${id}.json`)
}

export const postWorker = (id, body) => {
  return baseRequest.put(`/workers/${id}.json`, body)
}
// rooms ========================================
export const getRooms = () => {
  return baseRequest.get('/rooms.json')
}

export const postRoom = (body) => {
  return baseRequest.post('/rooms.json', body)
}

export const deleteRoom = (roomId) => {
  return baseRequest.delete(`/rooms/${roomId}.json`)
}


export const getSingleRoom = (roomId) => {
  return baseRequest.get(`/rooms/${roomId}.json`)
}

export const activateRoom = (roomId, body) => {
  return baseRequest.patch(`/rooms/${roomId}.json`, body)
}

// products ============================
export const postProduct = (body) => {
  return baseRequest.post('/products.json', body)
}
export const getProducts = () => {
  return baseRequest.get('/products.json')
}

export const deleteProduct = (productId) => {
  return baseRequest.delete(`/products/${productId}.json`)
}

export const editProduct = (productId, body) => {
  return baseRequest.patch(`/products/${productId}.json`, body)
}

// reports =======================================================
export const postReports = (workerId, body) => {
  return baseRequest.post(`/workers/${workerId}/reports.json`, body)
}

export const getReports = (workerId) => {
  return baseRequest.get(`/workers/${workerId}/reports.json`)
}

export const checkReport = (id, reportKey) => {
  const body = {
    isChecked: true,
  }
  return baseRequest.patch(`/workers/${id}/reports/${reportKey}.json`, body)
}

export const deleteReport = (id, reportKey) => {
  return baseRequest.delete(`/workers/${id}/reports/${reportKey}.json`)
}

// orders =========================================================
export const patchOrder = (workerId, orderId, body) => {
  return baseRequest.patch(`/workers/${workerId}/reports/${orderId}.json`, body)
}

export const getOldOrder = (workerId, orderId) => {
  return baseRequest.get(`/workers/${workerId}/reports/${orderId}.json`)
}

export const deleteOrder = (workerId, orderId) => {
  return baseRequest.delete(`/workers/${workerId}/reports/${orderId}.json`)
}

export const deletSingleRoom = (roomId) => {
  return baseRequest.delete(`rooms/${roomId}.json`)
}
