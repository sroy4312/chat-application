import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { LoginScreen, SignupScreen, SplashScreen, HomeScreen, AddToChatScreen, ChatScreen, ProfilesScreen } from './screens/index';
import Store from './context/store';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={Store}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="SignupScreen" component={SignupScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="AddToChatScreen" component={AddToChatScreen} />
          <Stack.Screen name="ChatScreen" component={ChatScreen} />
          <Stack.Screen name="ProfilesScreen" component={ProfilesScreen} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}