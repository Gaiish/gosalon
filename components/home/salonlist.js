import React, { Component } from 'react';
import EasyListView from 'react-native-easy-listview-gridview';
import {TouchableOpacity} from 'react-native';
import {Card, CardItem, Thumbnail, Text} from 'native-base';
import styles from '../../styles/styles';

export default class SalonList extends Component{
  constructor(props){
    super(props);
    this.data = [];
  }

  fetchData(pageNo, success, failure){
    let salonsRef = this.props.salonsRef;
    salonsRef.on('value', (snap)=>{
      let list_salons = snap.val();
      //console.log('snapshot:', list_salons);
      for (let i in list_salons){
        //console.log('i:',i);
        this.data.push(list_salons[i]);
      }
      success(this.data);//send data to the view
    })
  }

  renderGridItem(index, rowData, sectionId, rowId, highlightRow){
    const {navigate} = this.props.nav;
    return (
      <TouchableOpacity key={index}
        style={styles.rowContainer}
        onPress={()=> navigate('Profile', {
          profilesRef: this.props.profilesRef,
          dbNode: rowData.name
        })}>
        <Card>
          <CardItem cardBody>
            <Thumbnail square source={{uri: rowData.pic}}
              style={{height:100, width: 180}}
            />
          </CardItem>
          <CardItem>
            <Text>{rowData.name}</Text>
          </CardItem>
          <CardItem style={styles.muted}>
            <Text style={styles.mutedText}>{rowData.info}</Text>
          </CardItem>
        </Card>
      </TouchableOpacity>
    )
  }

  render(){
    return(
      <EasyListView
        ref={component => this.gridview = component}
        renderItem={this.renderGridItem.bind(this)}
        //isDataFixed={true}
        //fixedData={sample}
        refreshHandler = {this.fetchData.bind(this)}
        loadMoreHandler={this.fetchData.bind(this)}
        column={2}
      />
    )
  }
}
