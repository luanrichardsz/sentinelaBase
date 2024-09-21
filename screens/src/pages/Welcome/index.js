import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from "react-native";

import * as Animatable from 'react-native-animatable'

import { useNavigation } from "@react-navigation/native";

export default function Welcome() {

    const navigation = useNavigation();

    return(
        <ImageBackground 
            source={require('../../img/fundo.jpg')}
            style={styles.backgroundImage}
        >
            <View style={styles.container}>

                <View style={styles.containerLogo}>
                    <Animatable.Image
                    delay={300}
                    animation="flipInY"
                    source={require('../../img/logo.png')}
                    style={{ width: '100%' }}
                    resizeMode="contain"
                    />
                </View>

                <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                    <Text style={styles.title}>Monitore e Policie sua região de qualquer lugar!</Text>
                    <Text style={styles.text}>Faça o Login para Começar.</Text>

                    <TouchableOpacity  
                    style={styles.button}
                    onPress={ () => navigation.navigate('SignIn')}>

                        <Text style={styles.buttonText}>Acessar</Text>
                        
                    </TouchableOpacity>
                </Animatable.View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
    },
    containerLogo: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerForm: {
        flex: 1,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingStart: '5%',
        paddingEnd: '5%',
        justifyContent: 'center',
        backgroundColor: 'rgba(240, 240, 255, 0.6)',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    text: {
        color: '#2c2c2c',
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#23238E',
        borderRadius: 50,
        paddingVertical: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
