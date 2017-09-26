import React, {Component} from 'react';
import {List, Thumbnail, Text, ListItem, Body} from 'native-base';
import styles from '../../styles/styles'

export default class ResultList extends Component{
  constructor(props)
  {
    super(props);

  }

  renderRow(item){
    const {navigate} = this.props.nav;

    console.log('item: ',item)
    return(
      <ListItem thumbnail>
        <Thumbnail square size={100}
          source={{uri: item.salonPic}}
        />
        <Body>
          <Text>{item.salonName}</Text>
          <Text note>{item.info}</Text>
        </Body>
      </ListItem>
    )
  }

  render(){
    return(
      <List dataArray={this.props.list}
            renderRow={this.renderRow.bind(this)}>
      </List>
    )
  }
}
