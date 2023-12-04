import axios from "axios";

export const userLoaginStatus = () => {
  const authorization = localStorage.getItem("Authorization");
  if (authorization) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${authorization}`;
    return true;
  } else {
    return false;
  }
};
