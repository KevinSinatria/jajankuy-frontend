import axios from "axios";

export const api = axios.create({
    baseURL: "localhost:port/sekian",
    headers: {
        "Content-Type": "application/json",
    },
});