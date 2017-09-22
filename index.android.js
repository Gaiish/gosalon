import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import {AppRegistry, Alert} from 'react-native';
import Head from './components/home/header';
import SalonList from './components/home/salonlist';

import RNFirebase from 'react-native-firebase';

const config = {debug: true, persistence: true}
var app = RNFirebase.initializeApp(config);
//var db = app.database();

class gosalon extends Component {
  constructor(){
    super();
    this.unsubscribe = null;
    this.salonsRef = null;
    this.salonsPicRef = null;
  }

  componentWillMount(){
    let db = app.database();
    this.salonsRef = db.ref('all_salons');
    let storage = app.storage();
    this.picStorage = storage.ref('/aishabp.jpg');
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

  render() {
    return (
      <Container>
        <Head />
        <Content>
          <SalonList salonsRef={this.salonsRef}
            salonsPicRef={this.picStorage} />
        </Content>
      </Container>
    );
  }
}

AppRegistry.registerComponent('gosalon', () => gosalon);
