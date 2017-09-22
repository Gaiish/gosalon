import React, { Component } from 'react';
import EasyListView from 'react-native-easy-listview-gridview';
import {View, StyleSheet} from 'react-native';
import {Card, CardItem, Thumbnail, Text} from 'native-base';
import styles from '../../styles/styles';

export default class CategoryList extends Component{
  renderGridItem(index, rowData, sectionId, rowId, highlightRow){
    return (
      <View key={index} style={styles.rowContainer}>
        <Card>
          <CardItem cardBody>
            <Thumbnail square source={require('../../img/img3.jpg')}
              style={{height:100, width: 180}}
            />
          </CardItem>
          <CardItem>
            <Text>{rowData.name}</Text>
          </CardItem>
        </Card>
      </View>
    )
  }

  render(){
    return(
      <EasyListView
        ref={component => this.gridview = component}
        renderItem={this.renderGridItem.bind(this)}
        isDataFixed={true}
        fixedData={sample}
        column={2}
      />
    )
  }
}

const sample = [
  {
    name: 'Beauty Salon'
  },
  {
    name: 'Salm Salon'
  },
  {
    name: 'Karma Salon'
  },
  {
    name: 'Sky Salon'
  },
  {
    name: 'Sky Salon'
  },
  {
    name: 'Sky Salon'
  }
]
