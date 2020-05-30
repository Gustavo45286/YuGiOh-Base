import axios from 'axios';

const ygoApi = axios.create({
    baseURL: 'https://db.ygoprodeck.com/api/v7/cardinfo.php'
})

export default ygoApi;