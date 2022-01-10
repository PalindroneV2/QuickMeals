import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import RestScreen from './src/screens/RestaurantScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="QuickMeals" component={HomeScreen} />
        <Stack.Screen name="Menu" component={RestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;