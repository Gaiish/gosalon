import React, {Component} from 'react';
import {Container, Header, Item, Icon, Text, Content, H1} from 'native-base';
import {View} from 'react-native';
import styles from '../../styles/styles';
import Head from './header';
import ServiceList from './servicelist'

export default class Profile extends Component{
  constructor(){
    super()
    this.state={
      pic: 'http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder-300x300.png',
      info:'',
      list:[],
    }
  }

  static navigationOptions = {
    header: null
  }

  componentWillMount(){
    const {params} = this.props.navigation.state;
    let profilesRef = params.profilesRef;
    let currNode = profilesRef.child(params.dbNode);//get to the right node, e.g:/profiles/Aisha Beauty Parlour
    currNode.on('value', (snap)=>{
      let res = snap.val();
      console.log('res:',res);
      if(res!==null){
        let pic=res.pic;
        let info=res.info;
        this.setState({pic})
        this.setState({info})
        let list=[];
        for (let i in res.services){
          list.push(res.services[i]);
        }
        this.setState({list})
      }
    })
  }

  render(){
    const {params} = this.props.navigation.state;
    const {goBack} = this.props.navigation;

    return(
      <Container>
        <Head
          pic={this.state.pic}
          salonName={params.dbNode}
          info={this.state.info}
          pressed={()=>goBack()}
        />
        <Content>
          <ServiceList
            list={this.state.list}
          />
        </Content>
      </Container>
    )
  }
}
