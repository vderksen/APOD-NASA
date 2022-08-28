import React, { useEffect, useCallback } from 'react';
import { View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
//import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';


// Keep the splash screen visible while we fetch resources
//SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded] = useFonts({
    'Inter-Bold': require('./assets/fonts/Inter-Bold.otf'),
    'Inter': require('./assets/fonts/Inter-Regular.otf'),
    'Inter-SemiBold': require('./assets/fonts/Inter-SemiBold.otf'),
    'SF Pro Text': require('./assets/fonts/FontsFree-Net-SFProText-Regular.ttf'),
  });

  useEffect(() => {
      async function prepare() {
      await SplashScreen.preventAutoHideAsync();
      }
      
      prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
      if (fontsLoaded) {
      await SplashScreen.hideAsync();
      }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
      return null;
  }

  return (
    <View onLayout={onLayoutRootView}>
      <HomeScreen />
    </View>
  );
}
