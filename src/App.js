import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ScreenA from './screens/ScreenA';
import ScreenB from './screens/ScreenB';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Screen_A"
        screenOptions={{
          drawerType: 'front',
          swipeEdgeWidth: 100,
          drawerHideStatusBarOnOpen: false,
          overlayColor: '#00000090',
          drawerStyle: {backgroundColor: '#c6cbef', width: 250},
          headerShown: true,
          swipeEnabled: true,
          gestureEnabled: true,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#0080ff',
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: 'bold',
          },
        }}>
        <Drawer.Screen
          name="Screen_A"
          component={ScreenA}
          options={{
            title: 'Screen A title',
            drawerIcon: ({focused}) => (
              <FontAwesome5
                name="autoprefixer"
                size={focused ? 25 : 20}
                color={focused ? '#0080ff' : '#999999'}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Screen_B"
          component={ScreenB}
          options={{
            title: 'Screen B title',
            drawerIcon: ({focused}) => (
              <FontAwesome5
                name="btc"
                size={focused ? 25 : 20}
                color={focused ? '#0080ff' : '#999999'}
              />
            ),
          }}
          initialParams={{
            ItemName: 'Item from Drawer',
            ItemId: 12,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
