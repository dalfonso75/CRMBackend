import axios from "axios";
const baseUrl = "http://innteria.tech:3000/api/sellers/form";

const getComercial = (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const request = axios.get(baseUrl, config);
  return request.then((response) => response.data);
};

export default { getComercial };
