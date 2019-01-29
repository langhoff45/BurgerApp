import axios from 'axios';

const instant = axios.create({
    baseURL: "https://burgerapp-72c71.firebaseio.com/"
});

export default instant;