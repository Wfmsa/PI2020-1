import axios from 'axios'
import { config } from './BaseAPI'

export const loginMotorista = (login) => {
    return axios.post('/login/motorista', login, config)
        .then(res => res.data)
        .catch(error => {
            const message = 'Falha ao consultar Motoristas';
            console.log(error)
            throw { message: message, error }
        })
}

export const loginPassageiro = (loginP) => {
    return axios.post('/login/passageiro', loginP, config)
        .then(res => res.data)
        .catch(error => {
            const message = 'Falha ao consultar usuários';
            console.log(error)
            throw { message: message, error }
        })
}

export const passageiros = (response) => {
    return axios.get('lista/passageiro', config)
        .then(res => res.data)
        .catch(error => {
            const message = 'Falha ao consultar lista de passageiros';
            console.log(error)
            throw { message: message, error }
        })
}

export const updatePassageiro = (dados) => {
    return axios.put(`/update/statusPassageiro/?id=${dados.id}`, dados, config)
        .then(res => res.data)
        .catch(error => {
            const message = 'Falha ao atualizar status';
            console.log(error)
            throw { message: message, error }
        })
        
}

export const updateDadosMotorista = (dados) => {
    return axios.put(`/update/dadosMotorista/?id=${dados.id}`, dados, config)
        .then(res => res.data)
        .catch(error => {
            const message = 'Falha ao atualizar os dados do Motorista';
            console.log(error)
            throw { message: message, error }
        })
        
}

export const updateDadosPassageiro = (dados) => {
    return axios.put(`/update/dadosPassageiro/?id=${dados.id}`, dados, config)
        .then(res => res.data)
        .catch(error => {
            const message = 'Falha ao atualizar os dados do passageiro';
            console.log(error)
            throw { message: message, error }
        })
    }
        export const insertPassageiro = (dados) => {
            return axios.post("/cadastro/passageiro",dados,config)
            .then(res=>res.data)
            .catch(error=>{
                const message ='Falha no cadastro de usuario';
                console.log(error)
                throw { message: message, error }
            })
            }
                    
            export const insertMotorista = (dados) => {
                return axios.post("/cadastro/motorista",dados,config)
                .then(res=>res.data)
                .catch(error=>{
                    const message ='Falha no cadastro de usuario';
                    console.log(error)
                    throw { message: message, error }
                })
            }        

