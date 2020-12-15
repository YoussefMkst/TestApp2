import 'react-native-gesture-handler';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet, ScrollView, View, Text, Button, StatusBar, Alert} from 'react-native';
import MyObservations from './screens/MyObservations';
import NewObservation from './screens/NewObservation';
import GeneralObservations from './screens/GeneralObservations';


const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();


class App extends React.Component {
  render() {
    // return (
    //   <NavigationContainer>
    //     <Stack.Navigator 
    //       screenOptions={{
    //         headerShown: false,
    //       }}>
    //     <Stack.Screen
    //         name="Signup"
    //         component={SignupScreen}
    //       />
    //       <Stack.Screen
    //         name="Login"
    //         component={LoginScreen}
    //       />
    //     </Stack.Navigator>
    //   </NavigationContainer>
    // )
    return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName={"My Observations"}>
        <Tab.Screen name="New Observation" component={NewObservation} />
        <Tab.Screen name="My Observations" component={MyObservations} />
        <Tab.Screen name="General Observations" component={GeneralObservations} />
      </Tab.Navigator>
    </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
  }
});

export default App;