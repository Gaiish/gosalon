import React, {Component} from 'react';
import {Container, Content, Header, Item, Input, Icon} from 'native-base';
import styles from '../../styles/styles';
import ResultList from './resultList';

export default class Search extends Component{
  constructor(){
    super();
    this.state={
      inputedText: ''
    }
  }

  static navigationOptions = {
    header: null
  }

  componentWillMount(){
    const {params} = this.props.navigation.state;
    let inputedText = params.inputedText;
    this.setState({inputedText});
  }

  render(){
    const {params} = this.props.navigation.state;
    const {goBack} = this.props.navigation;

    return(
      <Container style={styles.searchContainer}>
        <Header searchBar style={styles.searchBar}
          androidStatusBarColor="#EF4E42">
          <Item>
            <Icon name="arrow-back" style={styles.searchIcon}
              onPress ={()=> goBack()}
            />
            <Input placeholder="search"
              value={this.state.inputedText}
              onChangeText={(inputedText)=>this.setState({inputedText})}
            />
          </Item>
        </Header>
        <Content>
          <ResultList
            searchRef={params.searchRef}
            searchKey={params.inputedText}
          />
        </Content>
      </Container>
    )
  }
}
