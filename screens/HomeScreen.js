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
            <Image
              source={require('../assets/images/van.png')}
              style={styles.welcomeImage}
            />
          </View>
  
          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>
              Bem-vindo(a) ao app que irá lhe mostrar a localização do transporte escolar!
            </Text>
          </View>
  
          <Button 
            title={'Exemplo de navegação!'}
            type={'outline'}
            buttonStyle={styles.btnNavegar}
            onPress={() => this.props.navigation.navigate('Map')}
          />
  
          <NavigatorTab rightBtn={() => this.props.navigation.navigate('Map')}/>
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
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  
});
