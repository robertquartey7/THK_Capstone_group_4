import axios from "axios";

export const getData = async (url) => {
  return new Promise(async (resolve, reject) => {
    const data = await axios.get(url);
    if (!data) {
      reject(data.data);
    }
    resolve(data.data);
  });
};
