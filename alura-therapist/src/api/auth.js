//  # login, signup API calls


import axios from "axios";

export const loginUser = (data) => {
  return axios.post("https://alurareset.com/api/user/login", data);
};