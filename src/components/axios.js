import axios from "axios";

var instance = axios.create({
    xsrfCookieName: "securetoken",
    xsrfHeaderName: "csrf-token",
});

export default instance;
