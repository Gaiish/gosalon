import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import {AppRegistry, Alert} from 'react-native';
import Head from './components/home/header';
import SalonList from './components/home/salonlist';

import RNFirebase from 'react-native-firebase';

const config = {debug: true}
var app = RNFirebase.initializeApp(config);
//var db = app.database();

class gosalon extends Component {
  constructor(){
    super();
    this.unsubscribe = null;
  }

  componentDidMount(){
    this.unsubscribe = app.auth().onAuthStateChanged((user)=>{
      if(user){
        //signed in
        console.log('user already signed in:',user);
        this.getData();
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

  getData(){
    let db = app.database();
    db.ref('all_salons').on('value', (snap)=>{
      console.log('snapshot:', snap.val());
    })
  }

  render() {
    return (
      <Container>
        <Head />
        <Content>
          <SalonList />
        </Content>
      </Container>
    );
  }
}

AppRegistry.registerComponent('gosalon', () => gosalon);
