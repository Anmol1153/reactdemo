import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import App from './App';
import formdemo from './formdemo';
import Homepage from './Homepage';

const Stack=
createStackNavigator();
function ActivityHandler(){
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="App"
            component={App}

            options={{ title: 'welcome',headerShown: false}}
          />
          
          <Stack.Screen
            name="formdemo"
            component={formdemo}
            options={{ title: '',headerShown: false}}
          />


           <Stack.Screen
            name="Homepage"
            component={Homepage}
            options={{ title: '',headerShown: false}}
          /> 
         
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
  export default ActivityHandler;