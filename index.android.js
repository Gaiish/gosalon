import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import {AppRegistry} from 'react-native';
import Head from './components/home/header';
import SalonList from './components/home/salonlist';
import Search from './components/search/search';

import {StackNavigator} from 'react-navigation';
import RNFirebase from 'react-native-firebase';

const config = {debug: true, persistence: true}
var app = RNFirebase.initializeApp(config);
//var db = app.database();

class Home extends Component {
  constructor(){
    super();
    this.unsubscribe = null;
    this.salonsRef = null; //ref for salons
    this.state = {
      inputedText: ''
    }
  }

  componentWillMount(){
    let db = app.database();
    this.salonsRef = db.ref('all_salons');
  }

  componentDidMount(){
    this.unsubscribe = app.auth().onAuthStateChanged((user)=>{
      if(user){
        //signed in
        console.log('user already signed in:',user);
      }
      else{
        //login anonymously
        app.auth().signInAnonymously().then((user)=>{
          console.log('user signing:', user);
        }, (err)=>{
          console.log('err:',err)
        });
      }
    })
  }

  componentWillUnmount(){
    if(this.unsubscribe){
      this.unsubscribe();
    }
  }

  static navigationOptions ={
    header: null
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container>
        <Head placeholder="search services"
              submit={()=> navigate('Search',
              {inputedText: this.state.inputedText})}
              onChangeText={(inputedText)=>this.setState({inputedText})}
              cat1="Facials"
              cat2="Body"
              cat3="Hair"
              cat4="Nails"
              cat5="Make Up"
              cat6="Massage"
              cat7="Ear Piercing"
        />
        <Content>
          <SalonList salonsRef={this.salonsRef} />
        </Content>
      </Container>
    );
  }
}

const gosalon = StackNavigator({
  Home: {screen: Home},
  Search: {screen: Search}
})

AppRegistry.registerComponent('gosalon', () => gosalon);
