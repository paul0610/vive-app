import React, { Component }  from 'react'
import { Platform, StyleSheet, Text, View , Button} from 'react-native';

export default class ActivityLogo extends React.Component {

    static navigationOptions = {
        title: 'Home',
        headerStyle: {
        backgroundColor: '#03A9F4',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold',
        },
        };

    

    render(){
        return(
            <View style={styles.container}>
                <Text>TEST LOGO APP</Text>

                <Button 
                    title="Go to Pagina Nro 2"
                    onPress={() => this.props.navigation.navigate('Profile')}/>

            </View>

        );
    }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    },
    headerText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold'
    },
  });





