import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function ProfilScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profil!</Text>
    </View>
  );
}

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

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Profil" component={ProfilScreen} />
        <Tab.Screen name="Event" component={EventScreen} />
        <Tab.Screen name="Reste" component={ResteScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}