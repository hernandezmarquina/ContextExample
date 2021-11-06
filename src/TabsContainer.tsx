import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import ProfileScreen from './screens/Profile';
import {AppContext} from './AppContext';

const Tab = createMaterialBottomTabNavigator();

const TabsContainer = () => {
  const context = React.useContext(AppContext);

  return (
    <NavigationContainer>
      <Tab.Navigator
        barStyle={{backgroundColor: context.color}}
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
  );
};

export default TabsContainer;
