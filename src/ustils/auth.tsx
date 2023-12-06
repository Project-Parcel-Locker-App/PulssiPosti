import axios from "axios";

export const userLoaginStatus = () => {
  const authorization = localStorage.getItem("Authorization");
  console.log("authorization", authorization);
  if (authorization) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${authorization}`;
    return true;
  } else {
    return false;
  }
};

export function createAxiosResponseInterceptor() {
  axios.defaults.withCredentials = true;
  let retryCounter = 0;
  const maxRetries = 3;

  const interceptor = axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.status !== 401) {
        return Promise.reject(error);
      }

      if (retryCounter >= maxRetries) {
        return Promise.reject(error);
      }

      retryCounter++;

      axios.interceptors.response.eject(interceptor);

      return axios
        .post("http://localhost:3000/api/auth/token/refresh")
        .then((refreshResponse) => {
          localStorage.setItem(
            "Authorization",
            refreshResponse.data._access_token_
          );
          error.response.config.headers["Authorization"] =
            "Bearer " + refreshResponse.data._access_token_;
          return axios(error.response.config);
        })
        .catch((refreshError) => {
          localStorage.setItem("Authorization", "");
          return Promise.reject(refreshError);
        })
        .finally(() => {
          // Reset the retry counter after the interceptor is finished
          //   retryCounter = 0;
          //   createAxiosResponseInterceptor();
        });
    }
  );
}
