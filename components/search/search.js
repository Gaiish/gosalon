import React, {Component} from 'react';
import {Container, Content, Header, Item, Input, Icon, Spinner} from 'native-base';
import styles from '../../styles/styles';
import ResultList from './resultList';

export default class Search extends Component{
  constructor(){
    super();
    this.state={
      inputedText: '',
      list:[],
    }
    this.searching = true;
  }

  static navigationOptions = {
    header: null
  }

  componentDidMount(){
    const {params} = this.props.navigation.state;
    //console.log('params:',this.props.navigation.state.params.inputedText)
    let inputedText = params.inputedText;
    this.setState({inputedText});

    //
    this.search(params.searchRef, params.inputedText);
  }

  search(ref, searchKey){
    let all_services = ref;
    //console.log("searchKey:",searchKey);

    //query data in the db at all_services node
    all_services.orderByChild(searchKey)
      .equalTo(true)
      .on('child_added', (snap)=> {
        //console.log("state before:", this.state.list)
        let salons = snap.val();
        let list=[]
        list.push(salons)
        this.searching = false;
        this.setState({list});
      })
  }

  submit(){
    this.searching = true;//searching started
    const {params} = this.props.navigation.state;
    this.search(params.searchRef, this.state.inputedText);
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
              onSubmitEditing={this.submit.bind(this)}
            />
          </Item>
        </Header>
        <Content>
          {this.searching==true ? (<Spinner color='red' />) : (
            <ResultList
              list={this.state.list}
            />
          ) }
        </Content>
      </Container>
    )
  }
}
