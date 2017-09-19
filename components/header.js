import React, {Component} from 'react';
import {
  Header, Button, Left, Right, Body, Icon, Container
} from 'native-base';
import {StyleSheet, View} from 'react-native';
import RegionSelect from './regionSelect';
import SearchBar from './searchbar';
import CategoryList from './categories';

export default class Head extends Component{
  render(){
    return(
      <View>
        <Header style={styles.header}
          androidStatusBarColor="#EF4E42">
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <RegionSelect />
          </Body>
          <Right />
        </Header>
        <SearchBar />
        <CategoryList />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#EF4E42",
  },
})
