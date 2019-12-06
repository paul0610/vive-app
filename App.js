import React from 'react';
import { Platform, StyleSheet, Text, View, YellowBox } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import ActivityLogo from './components/ActivityLogo';
import ActivityPrincipal from './components/ActivityPrincipal';

/*export default function App() {
  return (
    <ActivityLogo/>
  );
}*/

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}

const RootStack = createStackNavigator(
  {
      Home: { screen: ActivityLogo },
      Profile: { screen: ActivityPrincipal },
  },
  {
      initialRouteName: 'Logo',
  }
  );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
