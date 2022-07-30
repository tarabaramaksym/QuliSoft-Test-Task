import axios from "axios";

const clientId = '896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043';
const baseUrl = `https://api.unsplash.com/photos/?client_id=${clientId}`;

export const fetchImages = async () => {
  const res = await axios.get(baseUrl);
  return res.data;
}