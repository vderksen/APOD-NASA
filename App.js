import React from 'react';
import HomeScreen from './components/HomeScreen';
import ImageInfoScreen from './components/ImageInfoScreen';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';


const Stack = createNativeStackNavigator();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

export default function App() {

  const [loaded] = useFonts({
    'Inter-Bold': require('./assets/fonts/Inter-Bold.otf'), 
    'Inter': require('./assets/fonts/Inter-Regular.otf'),
    'Inter-SemiBold': require('./assets/fonts/Inter-SemiBold.otf'),
    'SF Pro Text': require('./assets/fonts/FontsFree-Net-SFProText-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }
  
  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator 
        initialRouteName='Home'>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            title: "Picture of the day",
            headerStyle: { heigh: 26 },
            headerTitleStyle: {
              fontSize: 22,
              fontFamily: 'Inter-Bold',
              color: '#202A41'},
              headerShadowVisible: false
          }}/>
        <Stack.Screen 
          name="ImageInfo" 
          component={ImageInfoScreen} 
          options={({ route }) => ({ 
            title: route.params.imgTitle,
            headerStyle: { heigh: 26 },
            headerTitleStyle: {
              fontSize: 22,
              fontFamily: 'Inter-Bold',
              color: '#202A41'},
            headerShadowVisible: false, 
            headerBackTitleVisible: true,
            headerBackTitleVisible: '',
            headerTintColor:'#5F6E91'
          })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}