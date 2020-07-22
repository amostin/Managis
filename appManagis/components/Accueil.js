import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from "react-native";

class Accueil extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={styles.submitContainer}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Inscription')}>
                        <Text style={styles.submitButton}>Inscription</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.submitContainer}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Connexion')}>
                        <Text style={styles.submitButton}>Connexion</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
    },
    submitButton: {
        width: 100,
        borderRadius: 25,
        paddingVertical: 13,
        textAlign: 'center',
        color: '#FFFFFF',

    },
    submitContainer: {
        backgroundColor: "#6D071A",
        borderRadius: 25,
        marginVertical: 10,
    },
    imgBack: {
        width: '100%',
        height: '80%',
        resizeMode: 'repeat',
        justifyContent: 'center',
        alignItems: 'center',
        right: 20,
        top: 120,
        opacity: 0.2,
        position: 'absolute',
    }
});


export default Accueil