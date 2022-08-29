import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Result = ({imgData}) => {

    const navigation = useNavigation();

    return(
        <View>
            <View style={styles.textContainer}>
                <View style={{paddingVertical: 8}}><Text style={styles.result}>Result ({imgData.length}):</Text></View>
            </View>
                <View style={styles.imgContainer}>
                <FlatList data={imgData} 
                    numColumns={3}
                    renderItem = {itemData => (
                        <TouchableWithoutFeedback onPress={() => navigation.navigate('ImageInfo', {
                            imgTitle: itemData.item.title, imgUrl: itemData.item.url, explanation: itemData.item.explanation})}>
                            <Image key={itemData.item.date} style={styles.image} source={{ uri: itemData.item.url }} /> 
                        </TouchableWithoutFeedback>)}/>
                </View>
        </View>   
    );
};

const styles = StyleSheet.create({
    textContainer: {
        width: '100%',
    },
    result: {
        fontFamily: 'Inter-SemiBold',
        width: '100%',
        height: 20,
        fontSize: 16,
        color: '#171F30'
    },
    imgContainer: {
        flex: 1,
        flexDirection:'row',
        flexWrap: "wrap",
        width: '100%',
        height: '100%',
    },
    image: {
        width: 104,
        height: 104,
        borderRadius: 4,
        margin: '3%',
    }
})

export default Result;