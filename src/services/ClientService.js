import api from "../lib/axios"

export default {
  getClients() {
    return api.get('/clients')
  },
  storeClient(data) {
    return api.post('/clients', data)
  }
}
