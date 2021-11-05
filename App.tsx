import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from './src/screens/HomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import {SafeAreaView} from 'react-native';
import ProfileScreen from './src/screens/Profile';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({color}) => {
              let iconName =
                route.name === 'Inicio'
                  ? 'home'
                  : route.name === 'Perfil'
                  ? 'person'
                  : 'settings';
              return <MaterialIcons name={iconName} size={24} color={color} />;
            },
          })}>
          <Tab.Screen name="Inicio" component={HomeScreen} />
          <Tab.Screen name="Perfil" component={ProfileScreen} />
          <Tab.Screen name="Ajustes" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
