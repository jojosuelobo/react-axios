/* eslint-disable no-unused-vars */
import axios from "axios";

const blogFetch = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
        "Content-type": "aplication/json"
    },
})

export default blogFetch