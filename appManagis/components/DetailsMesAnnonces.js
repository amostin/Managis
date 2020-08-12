import React, { Component } from 'react'

import { Text, TouchableOpacity, View, StyleSheet, ScrollView, Image, SafeAreaView, AsyncStorage } from 'react-native'

class DetailsMesAnnonces extends Component {

    reste = this.props.route.params.reste


    constructor(props) {
        super(props)
        this.state = {
            UserId: []
        }
    }


    //On récupère l'id de l'utilisateur connecté pour ne pas afficher ses annonces car il s'en fou de les voir.
    componentWillMount() {
        this._loadInitialState().done();
    }

    _loadInitialState = async () => {
        var value = await AsyncStorage.getItem('UserId');
        if (value !== null) {
            this.setState({ UserId: value });
        }
    }

    envoiRecup = () => {

        fetch('https://managis.ambroisemostin.com/controller/recupController.php', {
            method: 'POST',
            header: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                idReceveur: this.state.UserId,
                idReste: this.props.route.params.reste.idReste
                //idReceveur: 10,
                //idReste: 1
            })

        })
            .then((response) => response.json())
            .then((responseJson) => {
                alert('vous aurez +1 quand le donneur aura confirmé la recup');
            })
            .catch((error) => {
                console.error(error);
            });
    }


    envoiRecupTest = () => {
        console.log(this.props.route.params.reste);
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView>
                    <View style={styles.containerTitre}>
                        <View style={{ flex: 6, justifyContent: 'center' }}>
                            <Text style={styles.titrePage}>Détails de l'annonce</Text>
                        </View>
                        <View style={{ flex: 1 }}>

                        </View>
                    </View>
                    <View style={{ alignItems: 'center' }}>

                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: '#3A4750', marginTop: 10, marginBottom: 8 }}>Nom de l'annonce</Text>
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.inputBox}> {this.reste.nomReste} </Text>
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: '#3A4750', marginTop: 10, marginBottom: 8 }}>Quantité</Text>
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.inputBox}>{this.reste.quantiteReste}</Text>
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: '#3A4750', marginTop: 10, marginBottom: 8 }}>Description</Text>
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.inputBox}> {this.reste.description} </Text>
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: '#3A4750', marginTop: 10, marginBottom: 8 }}>Adresse</Text>
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.inputBox}> {this.reste.adresse} </Text>
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: '#3A4750', marginTop: 10, marginBottom: 8 }}>Adresse email de l'annonceur</Text>
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.inputBox}> {this.reste.email} </Text>
                        </View>
                        <View style={styles.submitContainer}>
                            <TouchableOpacity
                                onPress={() => this.envoiRecup()}>
                                <Text style={styles.submitButton}>confirmer que l'annonce à été récupérée</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    inputBox: {
        width: 300,
        backgroundColor: '#3A4750',
        borderRadius: 25,
        paddingVertical: 12,
        fontSize: 16,
        color: '#FFFFFF',
        textAlign: 'center',
        marginVertical: 10
    },
    submitButton: {
        backgroundColor: '#3A4750',
        width: 100,
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13,
        textAlign: 'center',
        color: '#FFFFFF'
    },
    submitContainer: {
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    inputContainer: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        borderColor: "#000000",
        borderRadius: 50,
        backgroundColor: '#3A4750',
        width: 350

    },
    titrePage: {
        color: '#FFFFFF',
        fontSize: 18,
        textAlign: 'center'
    },
    containerTitre: {
        backgroundColor: '#3A4750',
        flexDirection: 'row',
        height: 60
    },
    icon: {
        height: 30,
        width: 30
    },

})

export default DetailsMesAnnonces