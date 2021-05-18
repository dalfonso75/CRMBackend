import axios from "axios";
const baseUrl = "http://innteria.tech:3000/api/auth/login";
const ENDPOINT = "http://innteria.tech:3000/api";


export default function login({ userCC, password }) {
  const request = axios.post(baseUrl, { userCC, password });
  return request.then((response) => {
    const user = response.data.body;
    return user;
  });

  //   // return axios.post(baseUrl, { userCC, password }).then((res) => {
  //   //   const user = res.data.body;
  //   //   return user;
  //   // });
}
