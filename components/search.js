import React from 'react'
import { View, Image, Animated,StyleSheet } from "react-native";
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import {connect} from 'react-redux';
import axios from 'axios';
import MachineItem from './machineItem';
import {getMachineFromDealerInventory} from '../actions/index';

class Search extends React.Component {
  constructor(props) {
    super(props)
  }


  async getMachineFromDealerInventory(){
   const res = await axios('https://rakord.fr/sql/machineList.php');
   //return await res;
   console.log(this.state.listOfMachines['0']);

}

  render(){
    return(
      <Container>
          <Header style={{backgroundColor:'#2E86C1'}}>
            <Left>
              <Button transparent>
              <Icon name='menu' style={{color:'#FFFFFF'}}/>
              </Button>
            </Left>
            <Body>
              <Title style={{color:'#FFFFFF'}}>Machines</Title>
            </Body>
            <Right>
            <Button transparent onPress={() => this.getMachineFromDealerInventory()}>
            <Icon name='refresh' style={{color:'#FFFFFF'}}/>
            </Button>
            </Right>
          </Header>
          <Content>
            <Text>

            </Text>
          </Content>
          <Footer>
            <FooterTab>
              <Button full>
                <Text>Machine List</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
    )
  }
}

const styles = StyleSheet.create({

})

const mapStateToProps = ({ machineList }) => {
  return {
    listOfMachines: "machineList.listOfMachines"
  };
};

const mapDispatchToProps = {
  getMachineFromDealerInventory
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
