import axios from "axios";

export function request123(option) {
  // 1.创建axios实例
  const requestExample = axios.create({
    baseURL: "http://152.136.185.210:7878/api/m5"
  });
  // 2.axios的拦截器
  // 2.1请求拦截的作用
  requestExample.interceptors.request.use(
    config => {
      return config;
    },
    error => {
      console.log(error);
    }
  );
  // 2.2响应拦截器
  requestExample.interceptors.response.use(
    res => {
      return res.data;
    },
    error => {
      console.log(error);
    }
  );
  // 3.返回真正的网络请求
  return requestExample(option);
}

export function request152(option) {
  const requestExample = axios.create({
    baseURL: "http://152.136.185.210:7878/api/m5"
  });
  requestExample.interceptors.request.use(
    config => {
      return config;
    },
    error => {
      console.log(error);
    }
  );
  requestExample.interceptors.response.use(
    res => {
      return res.data;
    },
    error => {
      console.log(error);
    }
  );
  return requestExample(option);
}
