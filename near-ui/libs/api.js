import axios from "axios";

const API_BASEURL = "http://drops.aibyb.com.cn/";

export const get = async (path, params) => {
  const res = await axios.get(API_BASEURL + path, {
    params: { ...params },
  });

  return res;
};
