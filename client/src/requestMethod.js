import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZjllNWQxMjA5ZDQ3NDNhNjc0MDlkNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NDM3NTI1OH0.omAJEE-50WMkMweZ7LMnf1K_-AhB-A433y2Q_FARzNg";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
