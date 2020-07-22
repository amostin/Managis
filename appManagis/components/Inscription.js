import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, SafeAreaView, TextInput, Image } from "react-native";

class Inscription extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            userEmail: '',
            userPassword: ''
        }
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <Image
                    source={require('../assets/logo_transparent.png')}
                    style={styles.logo}
                />

                <TextInput
                    placeholder="Nom"
                    style={styles.inputBox}
                    underlineColorAndroid="transparent"
                    onChangeText={userName => this.setState({ userName })}
                    placeholderTextColor='#FFFFFF'
                />

                <TextInput
                    placeholder="Email"
                    placeholderTextColor='#FFFFFF'
                    style={styles.inputBox}
                    underlineColorAndroid="transparent"
                    onChangeText={userEmail => this.setState({ userEmail })}
                />

                <TextInput
                    placeholder="Mot de passe"
                    style={styles.inputBox}
                    secureTextEntry={true}
                    placeholderTextColor='#FFFFFF'
                    underlineColorAndroid="transparent"
                    onChangeText={userPassword => this.setState({ userPassword })}
                />

                <TouchableOpacity
                    //onPress={this.userRegister}
                    onPress={() => this.props.navigation.navigate("Profil")}
                    style={styles.submitButton}>
                    <Text style={{ color: 'white', textAlign: 'center' }}>S'inscrire</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("Connexion")}>
                    <Text>Vous avez déjà un compte ? Connectez vous !</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    logo: {
        width: 350,
        height: 300,
        margin: -50
    },
    inputBox: {
        width: 300,
        backgroundColor: '#6D071A',
        borderRadius: 25,
        paddingVertical: 12,
        fontSize: 16,
        color: '#FFFFFF',
        alignItems: 'center',
        marginVertical: 10,
        textAlign: 'center'
    },
    submitButton: {
        backgroundColor: '#6D071A',
        width: 100,
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13
    }
});

export default Inscription