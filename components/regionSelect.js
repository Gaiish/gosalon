import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Picker} from 'native-base';

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

const styles = StyleSheet.create({
  picker:{
    width: 250,
    color: "#FFF",
  },
});
