import axios from "axios";

const cepApi = axios.create({
  baseURL: "https://viacep.com.br/ws/",
});

export const buscarCep = async (cep: string) => {
  const { data } = await cepApi.get(`${cep}/json/`);
  return data;
};
