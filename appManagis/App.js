import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Profil from './components/Profil';
import Inscription from './components/Inscription';
import Connexion from './components/Connexion';


const ProfilStack = createStackNavigator();


function EventScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Event!</Text>
    </View>
  );
}

function ResteScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Reste!</Text>
    </View>
  );
}

function ProfilStackScreen() {
  return (
    <ProfilStack.Navigator>
      <ProfilStack.Screen name="Profile" component={Profil} options={{ title: 'Profil', headerTintColor: 'white', headerStyle: { backgroundColor: '#6D071A' } }} />
      <ProfilStack.Screen name="Inscription" component={Inscription} options={{ title: 'Inscription', headerTintColor: 'white', headerStyle: { backgroundColor: '#6D071A' } }} />
      <ProfilStack.Screen name="Connexion" component={Connexion} options={{ title: 'Connexion', headerTintColor: 'white', headerStyle: { backgroundColor: '#6D071A' } }} />
    </ProfilStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Profil" component={ProfilStackScreen} />
        <Tab.Screen name="Event" component={EventScreen} />
        <Tab.Screen name="Reste" component={ResteScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}