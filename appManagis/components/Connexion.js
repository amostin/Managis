import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, SafeAreaView, TextInput, Image } from "react-native";

class Connexion extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            UserEmail: '',
            UserName: '',
            UserPassword: '',
            user_name: '',
            avatar_url: '',
            avatar_show: false,
            UserId: '',

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
                    style={styles.inputBox}
                    placeholder="Pseudo"
                    underlineColorAndroid="transparent"
                    onChangeText={UserEmail => this.setState({ UserEmail })}
                    placeholderTextColor='#FFFFFF'
                />

                <TextInput
                    style={styles.inputBox}
                    placeholder="Mot de passe"
                    secureTextEntry={true}
                    placeholderTextColor='#FFFFFF'
                    underlineColorAndroid="transparent"
                    onChangeText={UserPassword => this.setState({ UserPassword })}

                />

                <TouchableOpacity
                    onPress={this.login}
                    style={styles.submitButton}>
                    <Text style={{ color: 'white', textAlign: 'center' }}>Se connecter</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("Register")}>
                    <Text>Pas encore de compte ? Inscrivez vous !</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
    },
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

export default Connexion