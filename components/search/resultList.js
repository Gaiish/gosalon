import React, {Component} from 'react';
import {List, Thumbnail, Text, ListItem, Body} from 'native-base';
import styles from '../../styles/styles'

export default class ResultList extends Component{
  constructor(props)
  {
    super(props);
    this.state={list:[]};
  }
  componentDidMount(){
    let all_services = this.props.searchRef;
    let searchKey = this.props.searchKey;

    //query data in the db at all_services node
    all_services.orderByChild(searchKey)
      .equalTo(true)
      .on('child_added', (snap)=> {
        console.log("state before:", this.state.list)
        let salons = snap.val();
        let list=[]
        list.push(salons)
        this.setState({list});
        console.log("state after:", this.state.list)
      })
  }

  renderRow(item){
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
      <List dataArray={this.state.list}
            renderRow={this.renderRow.bind(this)}>
      </List>
    )
  }
}
