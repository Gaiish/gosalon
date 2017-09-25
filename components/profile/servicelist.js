import React, {Component} from 'react';
import styles from '../../styles/styles';
import {List, Left, ListItem, Right, Body, Text} from 'native-base';

export default class ServiceList extends Component{
  constructor(props){
    super(props)
  }

  renderRow(item){
    console.log('item: ',item)
    return(
      <ListItem>
        <Left>
          <Text>{item.name}</Text>
        </Left>
        <Right>
          <Text style={styles.cash}>{item.price}</Text>
        </Right>
      </ListItem>
    )
  }

  render(){
    return(
      <List dataArray={this.props.list}
            renderRow={this.renderRow.bind(this)}
            style={{backgroundColor:"#FFF"}}>
      </List>
    )
  }
}
