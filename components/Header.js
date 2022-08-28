import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native'

const Header = () => {
    return(
        <View style={styles.titleConteiner}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

const title = `Picture of the day`;

const styles = StyleSheet.create({
    titleConteiner: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        padding: 8,
        paddingVertical: 16,
        gap: 16,
        position: 'absolute',
        width: 375,
        height: 66,
        left: 0,
        background: 'red',
        borderRadius: 10,
    },
    title: {
        alignItems: 'center',
        fontSize: 22,
        color: '#202A41',
        fontFamily: 'Inter-Bold',
    }
})

export default Header;