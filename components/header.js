import React, {Component} from 'react';
import {
  Header, Button, Left, Right, Body, Icon
} from 'native-base';
import {StyleSheet} from 'react-native';
import RegionSelect from './regionSelect';

export default class Head extends Component{
  render(){
    return(
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
    )
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#EF4E42",
  }
})
