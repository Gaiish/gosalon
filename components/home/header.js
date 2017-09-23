import React, {Component} from 'react';
import {
  Header, Button, Left, Right, Body, Icon
} from 'native-base';
import {StyleSheet, View} from 'react-native';
import RegionSelect from './regionSelect';
import SearchBar from './searchbar';
import CategoryList from './categories';
import styles from '../../styles/styles';

export default class Head extends Component{
  constructor(props){
    super(props);
  }

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
        <SearchBar placeholder={this.props.placeholder}
                   submit={this.props.submit}
                   onChangeText={this.props.onChangeText}
        />
        <CategoryList
          cat1={this.props.cat1}
          cat2={this.props.cat2}
          cat3={this.props.cat3}
          cat4={this.props.cat4}
          cat5={this.props.cat5}
          cat6={this.props.cat6}
          cat7={this.props.cat7}
        />
      </View>
    )
  }
}
