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

const create = (token, newObject) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const request = axios.post(baseUrl, newObject, config);
  return request.then((response) => response.data);
};

const update = (token, id, newObject) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const request = axios.put(`${baseUrl}/${id}`, newObject, config);
  return request.then((response) => response.data);
};
export default { getAll, create, update };
