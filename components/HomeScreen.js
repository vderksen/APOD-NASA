import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useCallback } from 'react';
import { SafeAreaView, View } from 'react-native';
import Header from './Header';
import UserInput from './UserInput';
import { useFonts } from 'expo-font';
//import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';


const HomeScreen = () => {

    return (
        <SafeAreaView>
            <View>
                <Header />
                <UserInput />
                <StatusBar style="auto" />
            </View>
        </SafeAreaView>
    );

};

export default HomeScreen;
