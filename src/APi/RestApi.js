import axios from "axios";

const FETCH_URL = "https://jsonmock.hackerrank.com/datetime";

export const API = async () => {
  return await axios
    .get(FETCH_URL)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => console.log("Error :", err));
};
