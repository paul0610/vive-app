import React, { Component }  from 'react'
import { StyleSheet, Text, View } from 'react-native';


export default class ActivityPrincipal extends Component{

    static navigationOptions = {
        title: "ActivityPrincipal",
        headerStyle: {
          backgroundColor: "#73C6B6"
        }
      };


    render(){
        return(
            <View style={styles.container}>
                <Text>SEGUNDA PANTALLA 2 </Text>

            </View>

        );
    }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0000',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });