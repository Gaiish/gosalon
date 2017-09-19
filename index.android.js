import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab,
  Button, Left, Right, Body, Icon, Text, Item, Input
} from 'native-base';

import {AppRegistry} from 'react-native';

import Head from './components/header';
//import SearchBar from './components/searchbar';
//import CategoryList from './components/categories';
import SalonList from './components/salonlist';
import styles from './styles/styles';

class gosalon extends Component {
  render() {
    return (
      <Container>
        <Head />
        <Content style={styles.content}>
          <SalonList />
        </Content>
      </Container>
    );
  }
}
AppRegistry.registerComponent('gosalon', () => gosalon);
