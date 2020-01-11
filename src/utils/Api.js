import axios from 'axios';

export const Header = {
    'Content-Type': 'application/json'
}

export function GET(url, header) {
    return axios.get(url, header)
        .then((res) => {
            return res
        })
        .catch((err) => {
            return err
        })
}
