import React, {Component} from 'react';
import {Container, Header, Item, Input, Icon} from 'native-base';
import styles from '../../styles/styles';

export default class Search extends Component{
  render(){
    return(
      <Container>
        <Header searchBar style={styles.searchBar}
          androidStatusBarColor="#EF4E42">
          <Item>
            <Icon name="arrow-back" style={styles.searchIcon} />
            <Input placeholder="search" />
          </Item>
        </Header>
      </Container>
    )
  }
}
