import React, { Component } from 'react';
import { Container, Content } from 'native-base';

import {AppRegistry} from 'react-native';

import Head from './components/header';
import SalonList from './components/salonlist';

class gosalon extends Component {
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
