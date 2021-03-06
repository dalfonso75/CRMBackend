import axios from "axios";
const baseUrl = "http://innteria.tech:3000/api/prospect";

const getAll = (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const request = axios.get(`${baseUrl}/getTableList`, config);
  return request.then((response) => response.data);
};
const get = (token, id) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const request = axios.get(`${baseUrl}/getTableList/${id}`, config);
  return request.then((response) => response.data);
};

const create = (token, newObject) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const request = axios.post(baseUrl, newObject, config);
  return request.then((response) => response.data);
};

const update = (token, newObject) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const request = axios.put(baseUrl, newObject, config);
  return request.then((response) => response.data);
};
export default { getAll, get, create, update };
