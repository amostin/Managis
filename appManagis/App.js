import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Accueil from './components/Accueil';
import Inscription from './components/Inscription';
import Connexion from './components/Connexion';
import Profil from './components/Profil';
import CreationAnnonce from './components/CreationAnnonce';
import ListeRestes from './components/ListeRestes';
import DetailsReste from './components/DetailsReste';



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

const AccueilStack = createStackNavigator();

function AccueilStackScreen() {
  return (
    <AccueilStack.Navigator>
      <AccueilStack.Screen name="Accueil" component={Accueil} options={{ title: 'Accueil', headerTintColor: 'white', headerStyle: { backgroundColor: '#6D071A' } }} />
      <AccueilStack.Screen name="Inscription" component={Inscription} options={{ title: 'Inscription', headerTintColor: 'white', headerStyle: { backgroundColor: '#6D071A' } }} />
      <AccueilStack.Screen name="Connexion" component={Connexion} options={{ title: 'Connexion', headerTintColor: 'white', headerStyle: { backgroundColor: '#6D071A' } }} />
      <AccueilStack.Screen name="Profil" component={Profil} options={{ title: 'Profil', headerTintColor: 'white', headerStyle: { backgroundColor: '#6D071A' } }} />
      <AccueilStack.Screen name="CreationAnnonce" component={CreationAnnonce} options={{ title: 'CreationAnnonce', headerTintColor: 'white', headerStyle: { backgroundColor: '#6D071A' } }} />
      <AccueilStack.Screen name="ListeRestes" component={ListeRestes} options={{ title: 'ListeRestes', headerTintColor: 'white', headerStyle: { backgroundColor: '#6D071A' } }} />
      <AccueilStack.Screen name="DetailsReste" component={DetailsReste} options={{ title: 'DetailsReste', headerTintColor: 'white', headerStyle: { backgroundColor: '#6D071A' } }} />
    </AccueilStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Accueil" component={AccueilStackScreen} />
        <Tab.Screen name="Event" component={EventScreen} />
        <Tab.Screen name="Reste" component={ResteScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}