import React, {Component} from 'react';
import {Container, Header, Item, Input, Icon} from 'native-base';
import styles from '../../styles/styles';

export default class Search extends Component{
  static navigationOptions = {
    header: null
  }

  render(){
    const {params} = this.props.navigation.state;
    const {goBack} = this.props.navigation;

    for (let i in this.props.navigation){
      console.log(i)
    }

    return(
      <Container>
        <Header searchBar style={styles.searchBar}
          androidStatusBarColor="#EF4E42">
          <Item>
            <Icon name="arrow-back" style={styles.searchIcon}
              onPress ={()=> goBack()}
            />
            <Input placeholder="search"
              value={params.inputedText}
            />
          </Item>
        </Header>
      </Container>
    )
  }
}
