import axios from "axios";
const baseUrl = "http://innteria.tech:3000/api/user";


const getUser = (token, cc) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const request = axios.get(`${baseUrl}/${cc}`, config);
    return request.then((response) => response.data);
};

const getAllUser = (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const request = axios.get(baseUrl, config);
  return request.then((response) => response.data);
};

const createUser = (token, newObject) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const request = axios.post(baseUrl, newObject, config);
  return request.then((response) => response.data);
};

const updateUser = (token, id, newObject) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const request = axios.put(`${baseUrl}/${id}`, newObject, config);
  return request.then((response) => response.data);
};
export default { getUser, getAllUser, createUser, updateUser };
