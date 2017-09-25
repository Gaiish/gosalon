import React, {Component} from 'react';
import {Header,
  Card,
  CardItem,
  H1,
  Text,
  Body,
  Button,
  Icon,
  Item
} from 'native-base';
import {View, Image, TouchableOpacity} from 'react-native';
import styles from '../../styles/styles';

export default class Head extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Card>
        <CardItem cardBody>
          <Image
            source={{uri: this.props.pic}}
            style={styles.profileImg}
          />
          <TouchableOpacity style={styles.arr_bck}
            onPress={this.props.pressed}>
            <Icon name="arrow-back" style={styles.bck} />
          </TouchableOpacity>
        </CardItem>
        <CardItem>
          <Body>
            <H1>{this.props.salonName}</H1>
            <Text note>{this.props.info}</Text>
          </Body>
        </CardItem>
      </Card>
    )
  }
}
