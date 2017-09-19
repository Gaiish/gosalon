import React, { Component } from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {Button, Icon, Text} from 'native-base';
import styles from '../styles/styles';

export default class CategoryList extends Component{
  render(){
    return(
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        <Button transparent style={styles.btnIcon}>
          <Icon name="pizza" style={styles.icon} />
          <Text style={styles.btnTxt}>Pizza</Text>
        </Button>
        <Button transparent style={styles.btnIcon}>
          <Icon name="pie" style={styles.icon} />
          <Text style={styles.btnTxt}>Pizza</Text>
        </Button>
        <Button transparent style={styles.btnIcon}>
          <Icon name="nutrition" style={styles.icon} />
          <Text style={styles.btnTxt}>Pizza</Text>
        </Button>
        <Button transparent style={styles.btnIcon}>
          <Icon name="star-half" style={styles.icon} />
          <Text style={styles.btnTxt}>Pizza</Text>
        </Button>
        <Button transparent style={styles.btnIcon}>
          <Icon name="ionic" style={styles.icon} />
          <Text style={styles.btnTxt}>Pizza</Text>
        </Button>
        <Button transparent style={styles.btnIcon}>
          <Icon name="wine" style={styles.icon} />
          <Text style={styles.btnTxt}>Pizza</Text>
        </Button>
        <Button transparent style={styles.btnIcon}>
          <Icon name="appstore" style={styles.icon} />
          <Text style={styles.btnTxt}>Pizza</Text>
        </Button>
      </ScrollView>
    )
  }
}
