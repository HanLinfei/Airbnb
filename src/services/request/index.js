import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";
class Request {
  constructor(baseURL, timeout) {
    // 每个类都保持一个实例
    this.instance = axios.create({
      baseURL,
      timeout,
    });

    // 拦截器:响应拦截 => 过滤一遍 返回data
    this.instance.interceptors.response.use(
      (res) => {
        return res.data;
      },
      (err) => {
        return err;
      }
    );
  }
  request(config) {
    return this.instance.request(config);
  }

  get(config) {
    return this.request({ ...config, method: "get" });
  }
  post(config) {
    return this.request({ ...config, method: "post" });
  }
}

// 请求实例1
const requestInstance = new Request(BASE_URL, TIMEOUT);
export default requestInstance;
