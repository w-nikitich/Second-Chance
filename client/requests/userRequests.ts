import axios from "axios";

export const registerUser = async ({ deviceId, nickname }: any) => {
  try {
    const res=  await axios.post("http://192.168.0.3:3000/auth/register", {
      deviceId,
      nickname,
    });
    console.log(res)
    return res
  } catch (error) {
    console.error(error);
    throw error
  }
};

export const testRequest = async () => {
  try {
    await axios.get("http://192.168.0.3:3000");
  } catch (error) {
    console.error(error);
  }
};
