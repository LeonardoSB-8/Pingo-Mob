import axios from 'axios';


const api = axios.create({
  baseURL: 'http://192.168.0.101:3000',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  timeout: 20000
});

// Interceptor para debug
api.interceptors.request.use(config => {
  console.log('Enviando requisição para:', config.url);
  return config;
});

api.interceptors.response.use(
  response => {
    console.log('Resposta recebida:', response.status);
    return response;
  },
  error => {
    console.error('Erro completo:', {
      message: error.message,
      config: error.config,
      response: error.response?.data
    });
    return Promise.reject(error);
  }
);

export default api;