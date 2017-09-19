import React, { Component } from 'react';
import {Item, Header, Input, Icon} from 'native-base';
import {StyleSheet} from 'react-native';

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

const styles = StyleSheet.create({
  searchBar:{
    backgroundColor: "#FFF",
  },
  searchIcon:{
    color: "#EF4E42"
  }
})
