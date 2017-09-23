import React, { Component } from 'react';
import {Item, Header, Input, Icon} from 'native-base';
import styles from '../../styles/styles';

export default class SearchBar extends Component{
  render(){
    return(
      <Header searchBar style={styles.searchBar}
        androidStatusBarColor="#EF4E42">
        <Item>
          <Icon name="ios-search" style={styles.searchIcon} />
          <Input placeholder="search services" />
        </Item>
      </Header>
    )
  }
}
