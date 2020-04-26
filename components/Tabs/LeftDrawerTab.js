import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as UsuarioRepositorio from '../../repositorios/UsuarioRepositorio';


export default class LeftDrawerTab extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: '',
        }
    }

    async fetchData() {
        const dados = await UsuarioRepositorio.buscarTodos()
        this.setState({ data: dados[0] })
    }

    componentDidMount() {
        this.fetchData();
    }


    render() {
        return (
            <View style={{ height: 150, backgroundColor: '#252525', alignItems: "center", justifyContent: "center" }}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('ProfileP')}>
                    <Ionicons name="md-contact" size={80} color="lightgray" />
                    <Text style={{ color: "lightgray", fontWeight: "bold", alignSelf: "center" }}>{this.state.data.Nome}</Text>
                </TouchableOpacity>

            </View>
        );
    }

}

