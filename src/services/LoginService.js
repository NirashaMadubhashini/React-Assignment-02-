import axios from "axios";

class LoginService {
    loginUser = async (data) => {

        const promise = new Promise((resolve, reject) => {
            axios.post('login', data)
                .then((res) => {
                    return resolve(res)
                })
                .catch((er) => {
                    return resolve(er)
                })
        })
        return await promise
    }
}

export default new LoginService()