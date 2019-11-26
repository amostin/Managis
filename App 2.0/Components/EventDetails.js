import React, { Component } from 'react'

import { Text, StyleSheet, View, TouchableOpacity, FlatList, ScrollView, Image } from 'react-native'

var INVITES = [
  {

  }
]

 class EventDetails extends Component {



  constructor(props) {
    super(props)
    this.state = {
      onPressedInvites: false,
      onPressedFournitures: false,
      onPressedCommentaires: false
    }
    this.handlerButtonOnPressInvites = this.handlerButtonOnPressInvites.bind(this)
    this.handlerButtonOnPressFournitures = this.handlerButtonOnPressFournitures.bind(this)
    this.handlerButtonOnPressCommentaires = this.handlerButtonOnPressCommentaires.bind(this)
  }
  handlerButtonOnPressInvites() {
    if (this.state.onPressedInvites == false) {
      this.setState({
        onPressedInvites: true,
        onPressedFournitures: false,
        onPressedCommentaires: false
      })
    } else {
      this.setState({
        onPressedInvites: false,
        onPressedFournitures: false,
        onPressedCommentaires: false
      })
    }
  }

  handlerButtonOnPressFournitures() {
    if (this.state.onPressedFournitures == false) {
      this.setState({
        onPressedFournitures: true,
        onPressedInvites: false,
        onPressedCommentaires: false
      })
    } else {
      this.setState({
        onPressedInvites: false,
        onPressedFournitures: false,
        onPressedCommentaires: false
      })
    }
  }

  handlerButtonOnPressCommentaires() {
    if (this.state.onPressedCommentaires == false) {
      this.setState({
        onPressedCommentaires: true,
        onPressedInvites: false,
        onPressedFournitures: false
      })
    } else {
      this.setState({
        onPressedInvites: false,
        onPressedFournitures: false,
        onPressedCommentaires: false
      })
    }
  }

  buildTabInvites(tab) {
    for (let i=0; i<tab.length; i++) {
      if (i === 0) {
        INVITES[0] = (tab[i])
      } else {
        INVITES.push(tab[i])
      }

    }
    //return invites
    //console.log('liste des invites : ' + INVITES)
  }

  inviteCombines(){
    INVITES=[{}]
    this.buildTabInvites(this.props.navigation.state.params.event.invites)
    this.handlerButtonOnPressInvites()
  }

  render() {
    var _styleInvites
    var _styleFournitures
    var _styleCommentaires

    if (this.state.onPressedInvites) {
      _styleInvites = {
        display: 'flex'
      }
    } else {
      _styleInvites = {
        display: 'none'
      }
    }

    if (this.state.onPressedFournitures) {
      _styleFournitures = {
        display: 'flex'
      }
    } else {
      _styleFournitures = {
        display: 'none'
      }
    }

    if (this.state.onPressedCommentaires) {
      _styleCommentaires = {
        display: 'flex'
      }
    } else {
      _styleCommentaires = {
        display: 'none'
      }
    }

    const event = this.props.navigation.state.params.event
    return (
      <ScrollView>
      <View style={{flex: 1}}>
      	<View style={styles.containerTitre}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image
              style={{width: 30, height: 30}}
              source={require('../Images/icons8-gauche-50.png')}/>
          </TouchableOpacity>
          <View style={{flex: 6, justifyContent: 'center'}}>
        	 <Text style={styles.titre}>{event.title}</Text>
          </View>
          <View style={{flex: 1}}>
          </View>
        </View>
        <View style={styles.containerTitreDate}>
        	<Text style={styles.titre2}>Date de l'événement: </Text>
        </View>
        	<Text style={styles.text}>{event.date}</Text>

        <View style={styles.containerTitre2}>
        	<Text style={styles.titre2}>Heure de l'événement: </Text>
        </View>
        <View>
       		<Text style={styles.text}>{event.heure}</Text>
       	</View>
        <View style={styles.containerTitre2}>
        	<Text style={styles.titre2}>Lieu de l'événement: </Text>
        </View>
        <Text style={styles.text}>{event.lieu}</Text>
        <View style={{flexDirection: 'row', flex: 1}}>
        	<TouchableOpacity
        		style={styles.choix}
        		onPress={() => this.inviteCombines()}>
        		<Text style={{color: '#FFFFFF', fontSize: 16}}>Invités</Text>
        	</TouchableOpacity>
        	<TouchableOpacity
            style={styles.choix}
            onPress={() => this.handlerButtonOnPressFournitures()}>
        		<Text style={{color: '#FFFFFF', fontSize: 16}}>Fournitures</Text>
        	</TouchableOpacity>
        	<TouchableOpacity
            style={styles.choix}
            onPress={() => this.handlerButtonOnPressCommentaires()}>
        		<Text style={{color: '#FFFFFF', fontSize: 16}}>Commentaires</Text>
        	</TouchableOpacity>
        </View>
        <View style={_styleInvites}>
          <Text style={{textAlign: 'center', fontSize: 16, margin: 6, justifyContent: 'center', color: "#3A4750"}}>Liste des invités</Text>
        	<FlatList
        		data={INVITES}
            //keyExtractor={invites.id}
        		renderItem={({item}) =>
              <View style={{borderColor: '#3A4750', borderWidth: 2, borderRadius: 25, margin: 3, marginLeft: 6, marginRight: 6, padding: 2, flexDirection: 'row', height: 50}}>
                <View style={{flex: 1}}>
                </View>
                <View style={{flex: 4, alignItems: 'center', justifyContent: 'center'}}>
                  <Text style={{textAlign: 'center', color: '#3A4750'}}>{item.pseudo}</Text>
                </View>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                  <TouchableOpacity
                    onPress={() => console.log("on retire l'invite avec le pseudo : " + item.pseudo)}>
                    <Image
                      style={{height: 30, width: 30}}
                      source={require('../Images/icons8-retirer-administrateur-50.png')}/>
                  </TouchableOpacity>
                </View>
              </View>}
        	/>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("AjoutInvites")}
              style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#3A4750', width: 250, borderRadius: 25, marginTop: 20}}>
              <Image
                style={{width: 30, height: 30}}
                source={require('../Images/icons8-plus-50.png')}/>
              <Text style={{fontSize: 16, color:'#FFFFFF'}}>Ajoutez un invité !</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={_styleFournitures}>
          <Text style={{textAlign: 'center', fontSize: 16, margin: 6, color: "#3A4750", justifyContent: 'center'}}>Liste des fournitures</Text>
          <FlatList
            data={this.props.navigation.state.params.event.fournitures}
            renderItem={({item}) =>
              <View style={{backgroundColor: '#3A4750', margin: 3, marginLeft: 6, marginRight: 6, padding: 2}}>
                <Text style={{textAlign: 'center', color: '#FFFFFF'}}>{item}</Text>
              </View>}
          />
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("AjoutFournitures")}
              style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#3A4750', width: 250, borderRadius: 25, marginTop: 20}}>
              <Image
                style={{width: 30, height: 30}}
                source={require('../Images/icons8-plus-50.png')}/>
              <Text style={{fontSize: 16, color:'#FFFFFF'}}>Ajoutez des fournitures !</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={_styleCommentaires}>
          <Text style={{textAlign: 'center', fontSize: 16, margin: 6, justifyContent: 'center', color: "#3A4750"}}>Commentaires</Text>
          <FlatList
            data={this.props.navigation.state.params.event.commentaires}
            renderItem={({item}) =>
              <View style={{backgroundColor: '#3A4750', margin: 3, marginLeft: 6, marginRight: 6, padding: 2}}>
                <Text style={{textAlign: 'center', color: '#FFFFFF'}}>{item}</Text>
              </View>}
          />
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("AjoutCommentaires")}
              style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#3A4750', width: 250, borderRadius: 25, marginTop: 20}}>
              <Image
                style={{width: 30, height: 30}}
                source={require('../Images/icons8-plus-50.png')}/>
              <Text style={{fontSize: 16, color:'#FFFFFF'}}>Ajoutez un commentaire !</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
	titre: {
		color: '#FFFFFF',
		fontSize: 18,
		textAlign: 'center'
	},
	containerTitre: {
    backgroundColor:'#3A4750',
    flexDirection: 'row',
    height: 60
  },
  titre2: {
		color: '#FFFFFF',
		fontSize: 25,
		textAlign: 'center'
	},
	containerTitre2: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
    backgroundColor:'#3A4750',
    marginLeft: 8,
    marginRight: 8,
    borderRadius: 25
  },
  containerTitreDate: {
  	flex: 1,
  	justifyContent: 'center',
  	alignItems: 'center',
    backgroundColor:'#3A4750',
    margin : 8,
    marginBottom: 0,
    borderRadius: 25,
  },
  text:{
  	color: '#3A4750',
		 fontSize: 18,
		 textAlign: 'center',
		 paddingBottom: 10,
		 paddingTop: 10,
		 justifyContent: 'center',
  },
  choix: {
  	flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  	borderRadius :25,
  	backgroundColor: '#3A4750',
  	alignItems: 'center',
  	padding: 5,
  	margin : 4
  },
  invites: {
    display: 'flex'
    }
})
export default EventDetails
