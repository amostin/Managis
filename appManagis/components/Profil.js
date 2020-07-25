import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, SafeAreaView, TextInput, Image, ScrollView, View } from "react-native";

class Profil extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            avatarSource: null,
            UserName: [],
            UserEmail: [],
            UserId: []
        }
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.containerTitre}>
                        <View style={{ flex: 1 }}>

                        </View>
                        <View style={{ flex: 6, justifyContent: 'center' }}>
                            <Text style={styles.titrePage}>Profil</Text>
                        </View>
                    </View>
                    <View style={styles.header}></View>
                    <View style={styles.container}>

                        <View style={styles.header}>
                            <View style={styles.headerContent}>
                                <Image style={styles.avatar}
                                    source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar1.png' }} />
                                <Text style={styles.name}>
                                    <Image source={require('../assets/male-profile-picture_icon-icons.com_68388.png')}
                                        style={{ height: 24, width: 24 }} />
                                    <Text style={styles.name}> {this.state.UserName}</Text>
                                </Text>
                            </View>
                        </View>

                        <View style={styles.body}>
                            <View style={styles.bodyContent}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ fontSize: 22, color: "black", marginLeft: 5 }}>
                                        {this.state.UserEmail}
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <View>
                                <TextInput
                                    style={styles.inputBox}
                                    placeholder="Nouveau mot de passe"
                                    //secureTextEntry="true"
                                    underlineColorAndroid="transparent"
                                    placeholderTextColor='#FFFFFF'
                                    onChangeText={newPswd => this.setState({ newPswd })}
                                />
                            </View>
                            <View style={{ justifyContent: 'flex-end' }}>
                                <TouchableOpacity
                                    onPress={() => this.testAlert()}
                                    style={styles.buttonModif}>
                                    <Text style={{ color: 'white' }}>Modifier</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ justifyContent: 'flex-end' }}>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate("Accueil")}
                                    style={styles.buttonDeconnexion}
                                >
                                    <Text style={{ color: 'white' }}>Déconnexion</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    containerTitre: {
        backgroundColor: '#3A4750',
        flexDirection: 'row',
        height: 60
    },
    header: {
        backgroundColor: "#3A4750",
    },

    inputBox: {
        width: 200,
        backgroundColor: '#3A4750',
        borderRadius: 25,
        paddingVertical: 12,
        fontSize: 16,
        color: '#FFFFFF',
        alignItems: 'center',
        marginVertical: 10,
        textAlign: 'center',
    },
    name: {
        fontSize: 22,
        color: "#FFFFFF",
        fontWeight: '600',
    },
    body: {
        marginTop: 40,
        alignItems: 'center'
    },

    buttonDeconnexion: {
        backgroundColor: '#660000',
        width: 100,
        borderRadius: 25,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        paddingVertical: 13
    },

    buttonModif: {
        width: 100,
        backgroundColor: '#3A4750',
        borderRadius: 25,
        paddingVertical: 12,
        fontSize: 16,
        color: '#FFFFFF',
        alignItems: 'center',
        marginVertical: 10,
        textAlign: 'center',
    },


    bodyContent: {
        flex: 1,
        alignItems: 'flex-start',
        padding: 30
    },
    titrePage: {
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'center'
    },
    icon: {
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    txtIcon: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    headerContent: {
        padding: 30,
        alignItems: 'center',
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
    },
    textInfo: {
        fontSize: 18,
        marginTop: 20,
        color: "#696969",
    }
})
export default Profil