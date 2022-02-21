import axios from "axios";

const API_BASEURL = "http://192.168.81.170:3000";

export const get = async (path, params) => {
  const res = await axios.get(API_BASEURL + path, {
    params: { ...params },
  });

  return res;
};
