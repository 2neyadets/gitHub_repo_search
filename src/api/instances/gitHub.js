import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.github.com/',
  timeout: 30000
});

// instance.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
instance.defaults.headers.post['Content-Type'] = 'application/json';

// request interceptor
instance.interceptors.request.use(
  conf => conf,
  error => Promise.reject(error)
);

// response interceptor
instance.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
);

export default instance
