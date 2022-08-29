import React from 'react';
import { Text, StyleSheet, Image, ScrollView, SafeAreaView } from 'react-native';
//import Header from './Header';

const ImageInfoScreen = ({route}) => {

    const { imgUrl, explanation } = route.params;

    return(
            <SafeAreaView style={styles.container}>
                <Image style={styles.image} source={{ uri: imgUrl }} /> 
                <ScrollView style={styles.scroll}><Text style={styles.description}>{explanation}</Text></ScrollView>
            </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 363,
        borderRadius: 4,
        marginVertical: 24,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        marginBottom: 20
    },
    description: {
        paddingHorizontal: 15.5,
        width: '100%',
        fontFamily: 'Inter',
        fontSize: 16,
        color: '#171F30',
        lineHeight: 20
    },
    scroll: {
        width: '100%'
    }

})

export default ImageInfoScreen;