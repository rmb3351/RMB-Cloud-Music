/* axios的封装 */
import axios from "axios";
const DEFAULT_TIMEOUT = 5000;

/* 定义请求封装的类，在里面分别封装axios请求和get、post的封装后请求 */
class RMBRequest {
  request(config) {
    const service = axios.create({
      baseURL: "",
      timeout: config.timeout || DEFAULT_TIMEOUT,
    });
    /*   // 是否超时
    function IsCheckTimeOut() {
      var currentTime = Date.now();
      var timeStamp=getTimeStamp()
      return (currentTime - timeStamp) / 1000 > timeout;
    } */
    // 请求拦截器
    service.interceptors.request.use(
      (config) => {
        /*       // 判断vuex里是否有token
        if (store.getters.token) {
          //
          if (IsCheckTimeOut()) {
            // 如果超时，调用logout，清空用户token，清空用户权限
            store.dispatch("user/logout");
            //重定向到首页
            router.push("/login");
            // api处通过catch捕获到异常消息为token超时了
            return Promise.reject(new Error("token超时了"));
          } else {
            //将token放到请求拦截器配置项的headers里
            config.headers["Authorization"] = `Bearer ${store.getters.token}`;
          }
        } */
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    // 响应拦截器
    service.interceptors.response.use(
      (response) => {
        // 从配置项里解构出来success，message，data
        const { status, message, data } = response;
        /*  如果请求成功，把数据return出去，api处通过then直接拿到data，api调用request，
        request是一个axios实例，本身会返回一个promise对象，响应拦截器把data交给request，
        request会把data包装成一个promise对象 */
        if (status >= 200 && status <= 300) {
          return data;
        } else {
          // 错误信息提示
          console.error(message);
          /* 将错误结果返回给request，因为拦截器里不知道是正确的数据还是错误的数据，
          所以错误的数据通过reject传给request，前端可以通过catch来捕获异常 */
          return Promise.reject(new Error(message));
        }
      },
      (error) => {
        //一般是后端异常才会调用
        console.log("error", error);
        if (
          error.response &&
          error.response.data &&
          error.response.data.code === 10002
        ) {
          console.log(error.response.data);
          /*         store.dispatch("user/logout");
          router.push("/logout"); */
        } else {
          console.error(error.message);
        }
        console.error(error.message);
        return Promise.reject(error);
      }
    );
    // 注意记得把axios实例返回
    return service(config);
  }

  /* 封装get和post请求成方法，给中间层直接使用 */
  get(url, data) {
    return this.request({ url, method: "get", params: data });
  }
  post(url, data) {
    return this.request({ url, method: "post", data });
  }
}
const rmbRequest = new RMBRequest();
export default rmbRequest;
