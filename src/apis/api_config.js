import axios from 'axios'

axios.setConfig = function (config) {
  axios.defaults.baseURL = config.BASE_URL
  axios.defaults.timeout = config.AJAX_TIMEOUT
}

export default axios
