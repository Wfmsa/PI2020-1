import { AsyncStorage } from 'react-native';
const key = 'Usuario';

export async function limpar() {
  AsyncStorage
    .removeItem(key)
    .done();
}

export async function salvar(dados) {
  
  AsyncStorage
    .mergeItem(key, JSON.stringify(dados))
    .done();
}

export async function buscarTodos() {
    return AsyncStorage
        .getItem(key)
        .then(JSON.parse)
}