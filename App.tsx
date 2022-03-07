import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import Profile from './src/pages/Profile';
import SignUp from './src/pages/SignUp';
import Stock from './src/pages/Stock';
import {Provider} from 'react-redux';
import {store} from './src/config/redux/app/store';
import AddItem from './src/pages/AddItem';
import EditItem from './src/pages/EditItem';
import IncomingOutgoing from './src/pages/IncomingOutgoing';
import {ItemDocument} from './src/types/itemType';

export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  SignUp: undefined;
  Stock: undefined;
  AddItem: undefined;
  EditItem: ItemDocument;
  IncomingOutgoing: ItemDocument;
  Feed: {sort: 'latest' | 'top'} | undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="AddItem"
            component={AddItem}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="IncomingOutgoing"
            component={IncomingOutgoing}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Stock"
            component={Stock}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="EditItem"
            component={EditItem}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
