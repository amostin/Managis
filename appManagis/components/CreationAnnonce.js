import React, { Component } from 'react'
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import {
    Button,
    Text,
    View,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
    AsyncStorage
} from 'react-native'

class CreationAnnonce extends Component {

    constructor(props) {
        super(props)
        this.state = {
            UserId: [],
            userNomReste: '',
            userQuantiteReste: '',
            userDescriptionReste: '',
            userAdresse: '',
            image: null
        }
    }

    componentDidMount() {
        this._loadInitialState().done();
        this.getPermissionAsync();
    }


    getPermissionAsync = async () => {
        if (Constants.platform.android) {
          const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
        if (Constants.platform.ios) {
          const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
      };
    
      _pickImage = async () => {
        try {
          let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });
          if (!result.cancelled) {
            this.setState({ image: result.uri });
          }
    
          console.log(result);
        } catch (E) {
          console.log(E);
        }
      };

    _loadInitialState = async () => {
        var value = await AsyncStorage.getItem('UserId');
        if (value !== null) {
            this.setState({ UserId: value });
        }
    }

    userCreateAnnonce = () => {
        const { userNomReste } = this.state;
        const { userQuantiteReste } = this.state;
        const { userDescriptionReste } = this.state;
        const { userAdresse } = this.state;

        if (userNomReste == "") {

            //this.setState({ userNomReste: 'Entrez le nom de votre reste ' })
            alert("Entrez le nom de votre reste ");
        }
        else {

            fetch('https://managis.ambroisemostin.com/controller/ajoutAnnonceController.php', {
                method: 'POST',
                header: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    userId: this.state.UserId,
                    nomReste: userNomReste,
                    quantiteReste: userQuantiteReste,
                    descriptionReste: userDescriptionReste,
                    adresse: userAdresse,
                })

            })
                .then((response) => response.json())
                .then((responseJson) => {
                    alert("L'annonce a bien été créée.");
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }

    render() {
        let { image } = this.state;
        return (
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.containerTitre}>
                        <View style={{ flex: 1 }}>

                        </View>

                        <View style={{ flex: 6, justifyContent: 'center' }}>
                            <Text style={styles.titrePage}>Créer une annonce </Text>
                        </View>
                    </View>
                    <View >
                        <View style={styles.inputContainer}>
                            <Text style={styles.com}>Quel est votre reste ?</Text>
                            <TextInput
                                style={styles.inputBox}
                                placeholder='Ex : bac de bière'
                                placeholderTextColor='#FFFFFF'
                                onChangeText={userNomReste => this.setState({ userNomReste })}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text>Spécifiez la quantité</Text>
                            <TextInput
                                style={styles.inputBox}
                                placeholder='Quantité'
                                placeholderTextColor='#FFFFFF'
                                onChangeText={userQuantiteReste => this.setState({ userQuantiteReste })}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text>Ajoutez une description</Text>
                            <TextInput
                                style={styles.inputBox}
                                placeholder='Description'
                                placeholderTextColor='#FFFFFF'
                                onChangeText={userDescriptionReste => this.setState({ userDescriptionReste })}
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <Text>Ajoutez le lieu de l'échange</Text>
                            <TextInput
                                style={styles.inputBox}
                                placeholder='Ex: 2 rue du ciseau'
                                placeholderTextColor='#FFFFFF'
                                onChangeText={userAdresse => this.setState({ userAdresse })}
                            />
                        </View>

                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity
                                onPress={this._pickImage}
                                style={styles.submitButton}>
                                <Text style={{ color: 'white', textAlign: 'center' }}>Choisir une image</Text>
                            </TouchableOpacity>
                            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                        </View>

                        <View style={styles.submitContainer}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('AjoutImage')}
                                style={styles.submitButton}>
                                <Text style={{ color: 'white', textAlign: 'center' }}>test page upload inutile</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.submitContainer}>
                            <TouchableOpacity
                                onPress={this.userCreateAnnonce}
                                style={styles.submitButton}>
                                <Text style={{ color: 'white', textAlign: 'center' }}>Créer</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    logo: {
        width: 350,
        height: 350
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    inputContainer: {
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    submitContainer: {
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
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
    signupButton: {
        textAlign: 'center',
        marginVertical: 10,
        paddingVertical: 13,
        color: '#3A4750'
    },
    icon: {
        height: 30,
        width: 30
    },
    com: {
        marginTop: 10,
    }
})

export default CreationAnnonce