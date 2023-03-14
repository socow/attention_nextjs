import axios from "axios";

const URL = process.env.ATTENTION_API_KEY;

export const listRequest = {
  async get(setList: React.Dispatch<React.SetStateAction<string>>) {
    try {
      const res = await axios.get(`${URL}/posts/today`);
      if (res.status === 200) return setList(res.data);
    } catch (error) {
      console.error(error);
    }
  },
  async post(title: string, content: string) {
    try {
      await axios.post(`${URL}/posts`, {
        title,
        content,
      });

      alert("작성이 완료되었습니다");
    } catch (error) {
      console.error(error);
    }
  },
};
