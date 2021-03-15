import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';


export default function Home() {
    return (
        // Área segura para dispositivos novos na parte superior
        <SafeAreaView style={styles.container}>
            <Text>Home page</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e8f0ff',
        paddingTop: '5%'
    }
})