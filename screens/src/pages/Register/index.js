import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ImageBackground } from "react-native";
import * as Animatable from 'react-native-animatable';

import { useNavigation } from "@react-navigation/native";

export default function SignUp() {

    const navigation = useNavigation();

    return (
        <ImageBackground
            source={require('../../img/fundo.jpg')} // Imagem de fundo
            style={styles.backgroundImage}
        >
            <View style={styles.container}>
                <Animatable.View animation='fadeInLeft' delay={500} style={styles.containerHeader}>
                    <Text style={styles.message}>Crie sua Conta</Text>
                </Animatable.View>

                <Animatable.View animation='fadeInUp' delay={300} style={styles.containerForm}>
                    <Text style={styles.title}>Nome Completo:</Text>
                    <TextInput
                        placeholder="Jose Mafalda Mizeravi"
                        style={styles.input}
                        require
                    />
                    <Text style={styles.title}>Email:</Text>
                    <TextInput
                        placeholder="mafaldinhamzrv@gmail.com"
                        style={styles.input}
                        require
                    />
                    <Text style={styles.title}>Senha:</Text>
                    <TextInput
                        placeholder="********"
                        style={styles.input}
                        secureTextEntry={true} 
                        require
                    />
                    <Text style={styles.title}>Confirme sua Senha:</Text>
                    <TextInput
                        placeholder="********"
                        style={styles.input}
                        secureTextEntry={true}
                        require
                    />

                    <TouchableOpacity 
                    style={styles.button}
                    onPress={ () => navigation.navigate('Mapa')}>
                        <Text style={styles.buttonText}>Registrar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonRegister} onPress={ () => navigation.navigate('SignIn')}>
                        <Text style={styles.buttonRegisterText}>Já possui uma conta? Faça login</Text>
                    </TouchableOpacity>
                </Animatable.View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        textShadowColor: 'black',
        textShadowOffset: {width:1, height: 1},
        textShadowRadius: 5,
    },
    containerForm: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        padding: 20,
    },
    title: {
        fontSize: 20,
        marginTop: 28,
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#23238E',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonRegister: {
        marginTop: 14,
        alignSelf: 'center',
    },
    buttonRegisterText: {
        color: '#565656',
    },
});
