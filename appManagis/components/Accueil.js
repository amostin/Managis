import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, Image, ScrollView } from "react-native";

class Accueil extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ScrollView>
                <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                    <Image
                        source={require('../assets/logo_transparent.png')}
                        style={styles.logo}
                    />

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
                    <View style={styles.submitContainer}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('CreationAnnonce')}>
                            <Text style={styles.submitButton}>Créer une Annonce</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.submitContainer}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('ListeRestes')}>
                            <Text style={styles.submitButton}>Liste des restes</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.submitContainer}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('MesAnnonces')}>
                            <Text style={styles.submitButton}>Mes Annonces</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </ScrollView>
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