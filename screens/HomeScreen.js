import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from 'react-native-elements';
import NavigatorTab from '../components/Tabs/NavigatorTab';

export default class HomeScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

          <View style={styles.welcomeContainer}>
            <Text style={{ fontSize: 40 }}>Bem-Vindo</Text>
            <Text style={{ fontSize: 18 }}>escolha o tipo da conta</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={styles.iconM}
              activeOpacity={0.5}
              onPress={() => this.props.navigation.navigate('LoginM')}>
              <Image
                source={require('../assets/images/volante.png')}
                style={styles.welcomeImage}
              />
              <Text style={{ fontSize: 20, paddingLeft: 15, paddingTop: 5 }}>Motorista</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.iconP}
              activeOpacity={0.5}
              onPress={() => this.props.navigation.navigate('LoginP')}>
              <Image
                source={require('../assets/images/passageiro.png')}
                style={styles.welcomeImage}
              />
              <Text style={{ fontSize: 20, paddingLeft: 15, paddingTop: 5 }}>Passageiro</Text>
            </TouchableOpacity>
          </View>
          <NavigatorTab rightBtn={() => this.props.navigation.navigate('Map')} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
    height: '100%',
    justifyContent: 'space-between'
  },
  btnNavegar: {
    margin: 40
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: '10%',
    marginBottom: 20,
  },
  welcomeImage: {
    width: 120,
    height: 100,
    resizeMode: 'contain',
  }, 
  iconM: {
    paddingTop: 20,
    marginBottom: '45%',
    marginLeft: '12%'
  },

  iconP: {
    paddingTop: 20,
    marginBottom: '45%',
    marginLeft: '12%'
  }

});
