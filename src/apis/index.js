import axios from 'axios'

export default {
  fetch (method, url, data) {
    return new Promise(function (resolve, reject) {
      if (method === 'get') {
        resolve(axios.get(url, data))
      } else if (method === 'post') {
        resolve(axios.post(url, data))
      }
    })
  }
}
