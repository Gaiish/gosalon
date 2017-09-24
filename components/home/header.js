import React, {Component} from 'react';
import {
  Header, Button, Left, Right, Body, Icon
} from 'native-base';
import {View} from 'react-native';
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
          categories = {this.props.categories}
          navigation={this.props.navigation}
          searchRef={this.props.searchRef}
        />
      </View>
    )
  }
}
