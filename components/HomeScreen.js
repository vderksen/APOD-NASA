import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TextInput, TouchableWithoutFeedback, Pressable } from 'react-native';
import Result from './Result';
import NoResult from './NoResult';
import { MaskedTextInput} from "react-native-mask-text";

const HomeScreen = ({}) => {

    const [startDate, setStartDate] = useState(''); //2022-08-21
    const [endDate, setEndDate] = useState(''); //2022-08-26

    const [isLoadingData, setisLoadingData] = useState(false); // keep a track of whether the data is still loading or it has already been loaded
    const [data, setData] = useState([]); // will be used to store the data returned by the API
    const [showData, setShowData] = useState(false);

    const startDateInputHandler =(date) => {
        setStartDate(date);
    };
  
    const endDateInputHandler =(date) => {
        setEndDate(date);
    };

    // Fetch data frpm api
    const searchHandler = () => {
        setisLoadingData(true);
        setShowData(true)
        const NASA_API_KEY = 'FLqrd7FSYMXJSLHsKAieQwSdLoUBsfGSFx5OhKQD';
        const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}&start_date=${startDate}&end_date=${endDate}`;
        console.log(url)
        fetch(url)
          .then((response) => response.json())
          .then((json) => {
            setisLoadingData(false);
            setData(json)
          })
        .catch((error) => console.log(error));
    };

    return (
        <SafeAreaView >
            <View>
                <View>
                    <View style={styles.textContainer}>
                        <View style={{paddingVertical: 8}}><Text style={styles.subtitle}>{subtitle}</Text></View>
                        <View style={{paddingVertical: 8}}><Text style={styles.text}>{content}</Text></View>

                        <MaskedTextInput 
                            mask="9999-99-99"
                            label="Start date"
                            placeholder='Start date'
                            style={styles.dateInput} 
                            keyboardType='numeric'
                            onChangeText={date => startDateInputHandler(date)} 
                            value={startDate}/>
                        <MaskedTextInput
                            mask="9999-99-99"
                            label="End date"
                            placeholder='End date'
                            keyboardType='numeric'
                            style={styles.dateInput} 
                            onChangeText={date => endDateInputHandler(date)} 
                            value={endDate}/>
                        <TouchableWithoutFeedback onPress={searchHandler}>
                            <View style={styles.button} >
                                <Text style={styles.btnText}>Search</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        {showData ? (
                            isLoadingData ? (
                            <Text>LOADING DATA........</Text>
                            ) : (
                                <Result imgData={data} />
                                )
                            ) : (
                                <NoResult />
                            )}
                    </View>
                 </View>
                <StatusBar style="auto" />
            </View>
        </SafeAreaView>
    );

};

const subtitle = `Picture of the day:`;
const content = `Search for Astronomy: Picture of the day by date.`;

const styles = StyleSheet.create({
    textContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '100%',
        height: 64,
        alignSelf: 'stretch',
        padding: 15.5,
    },
    subtitle: {
        paddingTop: 5,
        color: '#202A41',
        fontFamily: 'Inter-SemiBold',
        width: '100%',
        height: 24,
        fontSize: 18
    },
    text: { 
        alignItems: 'stretch',
        color: '#171F30',
        fontFamily: 'SF Pro Text',
        fontSize: 14,
        width: '100%',
        height: 16
    },
    dateInput: {
        width: '100%', 
        paddingHorizontal: 16,
        paddingVertical: 22,
        marginVertical: 8,
        backgroundColor: '#F7F9FC',
        borderRadius: 8,
        height: 64,
        fontFamily: 'Inter',
        fontSize: 18,
        color: '#5F6E91'
    },
    button: {
        width: '100%', 
        padding: 12,
        marginVertical: 8,
        backgroundColor: '#F7F9FC',
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#5F6E91',
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText: {
        fontFamily: 'Inter',
        fontSize: 18,
        color: '#5F6E91',
        lineHeight: 21,
    }
})

export default HomeScreen;
