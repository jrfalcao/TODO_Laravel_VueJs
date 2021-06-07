import service from '../services'

const api = 'http://localhost:8000/api/'

const services = []
Object.entries(service).map((val) => {
  services[val[0]] = val[1]
})

export { api }
export default services
