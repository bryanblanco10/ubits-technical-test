import axios from "axios";

axios.defaults.headers.common["Content-Type"] = "application/json";

axios.interceptors.request.use((config) => {
  let access_token = null;
  if (localStorage?.getItem("stateAuth")) {
    const stateAuth = JSON.parse(
      localStorage.getItem("stateAuth") || ""
    )?.state;
    access_token = stateAuth?.token;
  }

  if (access_token) {
    config.headers.Authorization = `Bearer ${access_token}`;
  }

  return config;
});

axios.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err?.code === "ERR_NETWORK") {
      return Promise.reject({
        data: {
          status: "ERR_NETWORK",
          message: "No se pudo conectar con el servidor",
        },
      });
    }
    switch (err?.response?.status) {
      case 401:
        localStorage.clear();
        sessionStorage.clear();
        window.location.reload();
        break;

      //Server errors
      case 500:
      case 501:
      case 502:
      case 503:
      case 504:
      case 505:
      case 506:
      case 507:
      case 508:
      case 509:
      case 510:
      case 511:
        // console.log("Ocurrió un error, por favor comuníquese con su proveedor");
        break;
    }

    return Promise.reject(err.response);
  }
);

export default axios;
