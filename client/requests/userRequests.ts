import axios from "axios";
import * as SecureStore from 'expo-secure-store';

const axiosInstance = axios.create({
  baseURL: 'http://192.168.0.3:3000',
});

axiosInstance.interceptors.request.use(
  async (config) => {
    // await SecureStore.setItemAsync('secure_token','sahdkfjaskdflas$%^&');
    const token = await SecureStore.getItemAsync('token');
    console.log(token)
    // If the token exists, add it to the headers
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const registerUser = async ({ deviceId, nickname }: any) => {
  try {
    const res=  await axios.post("http://192.168.0.3:3000/auth/register", {
      deviceId,
      nickname,
    });
    await SecureStore.setItemAsync('token', res.data.access_token);
    return res
  } catch (error) {
    console.error(error);
    throw error
  }
};

export const getUser = async (deviceId: any) => {
  console.log('ya tut')
  try {
    const res = await axiosInstance.post('http://192.168.0.3:3000/auth/getUser', {
      deviceId
  });
    console.log(res.config.data)
    return res;
  } catch (error) {
    throw error
  }
}

export const testRequest = async () => {
  try {
    await axios.get("http://192.168.0.3:3000");
  } catch (error) {
    console.error(error);
  }
};
