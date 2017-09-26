import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import {AppRegistry, View} from 'react-native';
import Head from './components/home/header';
import SalonList from './components/home/salonlist';
import Search from './components/search/search';
import Profile from './components/profile/profile';
import Screens from './components/splash/screens';

import {StackNavigator} from 'react-navigation';
import RNFirebase from 'react-native-firebase';

const config = {debug: true, persistence: true}
var app = RNFirebase.initializeApp(config);
var db = app.database();//creating an instance of the database

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
        <Head placeholder="search gosalon"
              submit={()=> navigate('Search',
              {inputedText: this.state.inputedText,
              searchRef: db.ref('all_services'),
              profileRef: db
            }
            )}
              onChangeText={(inputedText)=>this.setState({inputedText})}
              categories={categories}
              navigation={this.props.navigation}
              searchRef={db.ref('all_services')}
        />
        <Content >
          <SalonList salonsRef={this.salonsRef}
                      nav={this.props.navigation}
                      profilesRef={db.ref('profiles')}
          />
        </Content>
      </Container>
    );
  }
}

const categories = [
  {iconName:'pizza', label:'facials'},
  {iconName:'pie', label:'body'},
  {iconName: 'nutrition', label:'hair'},
  {iconName:'star-half', label:'nails'},
  {iconName: 'ionic', label:'make up'},
  {iconName: 'wine', label:'massage'},
  {iconName: 'appstore', label:'ear piercing'},
]

const gosalon = StackNavigator({
  Splash:{screen: Screens},
  Home: {screen: Home},
  Search: {screen: Search},
  Profile: {screen: Profile}
})

AppRegistry.registerComponent('gosalon', () => gosalon);
