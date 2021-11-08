import axios from "axios";

const api = axios.create({
    baseURL: "https://localhost:5000",
//     params:{
//         api_key: "${api_key}", // 각자 발급받은 api key값을 적어주자!
//         language: "en-US"
// }
})

api.get("./api/main");
export default api;