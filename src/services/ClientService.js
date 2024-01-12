import api from "../lib/axios"

export default {
  getClients() {
    return api.get('/clients')
  },
  getClient(id) {
    return api.get(`/clients/${id}`)
  },
  storeClient(data) {
    return api.post('/clients', data)
  },
}
