import axios from 'axios'
import { config } from './BaseAPI'

export const consultar = (login) => {
    return axios.post('/login/motorista', login, config)
        .then(res => res.data)
        .catch(error => {
            const message = 'Falha ao consultar usuários';
            console.log(error)
            throw { message: message, error }
        })
}

export const passageiros = (response) => {
    return axios.get('login/passageiro', config)
        .then(res => res.data)
        .catch(error => {
            const message = 'Falha ao consultar lista de passageiros';
            console.log(error)
            throw { message: message, error }
        })
}