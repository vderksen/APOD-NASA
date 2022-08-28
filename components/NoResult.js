import React from 'react';
import { View, Text, StyleSheet, Image, WebView } from 'react-native';

const NoResult = () => {

    return(
        <View>
            <View style={styles.textContainer}>
                <View style={{paddingVertical: 8}}><Text style={styles.result}>Result (0):</Text></View>
                <View style={{paddingVertical: 8}}><Text style={styles.text}>No result found. Enter a start and end date.</Text></View>
            </View>
        </View>   
    );
};

const styles = StyleSheet.create({
    textContainer: {
        width: '100%',
        height: 48,
    },
    result: {
        fontFamily: 'Inter-SemiBold',
        width: '100%',
        height: 20,
        fontSize: 16,
        color: '#171F30'
    },
    text: { 
        fontFamily: 'Inter',
        width: '100%',
        height: 20,
        fontSize: 16,
        color: '#171F30'
    },
})

export default NoResult;