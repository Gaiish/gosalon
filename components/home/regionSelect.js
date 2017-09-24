import React, {Component} from 'react';
import {Picker} from 'native-base';
import styles from '../../styles/styles';

export default class RegionSelect extends Component{
  render(){
    return(
      <Picker
        style={styles.picker}
        mode="dropdown"
        selectedValue="Kampala, Muyenga">
        <Picker.Item label="Kampala, Kasanga" value="Kampala, Kasanga" />
        <Picker.Item label="Kampala, Muyenga" value="Kampala, Muyenga" />
        <Picker.Item label="Kampala, Kololo" value="Kampala, Kololo" />
        <Picker.Item label="Kampala, Kabalagala" value="Kampala, Kabalagala" />
      </Picker>
    )
  }
}
