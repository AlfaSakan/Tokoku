import * as React from 'react';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  SignUp,
  EditItem,
  IncomingOutgoing,
  Landing,
  OrderItemList,
} from './src/pages/';
import {Provider} from 'react-redux';
import {store} from './src/config/redux/app/store';
import {ItemDocument} from './src/types/itemType';
import BottomNavbarStackScreen, {
  BottomNavbarStackType,
} from './src/navigator/BottomNavbarStack';

export type RootStackParamList = {
  SignUp: undefined;
  EditItem: ItemDocument;
  IncomingOutgoing: ItemDocument;
  BottomNavbarStackScreen: NavigatorScreenParams<BottomNavbarStackType>;
  Landing: undefined;
  OrderItemList: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Landing"
            component={Landing}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="IncomingOutgoing"
            component={IncomingOutgoing}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="EditItem"
            component={EditItem}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="OrderItemList"
            component={OrderItemList}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="BottomNavbarStackScreen"
            component={BottomNavbarStackScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
