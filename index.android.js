import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab,
  Button, Left, Right, Body, Icon, Text, Item, Input
} from 'native-base';
import {AppRegistry} from 'react-native';
import Head from './components/header';
import SearchBar from './components/searchbar';

class gosalon extends Component {
  render() {
    return (
      <Container>
        <Head />
        <Content>
          <SearchBar />
          <Text>
            This is Content Section
          </Text>
        </Content>
      </Container>
    );
  }
}
AppRegistry.registerComponent('gosalon', () => gosalon);
