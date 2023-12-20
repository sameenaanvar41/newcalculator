import { View, Text} from 'react-native';
import React from 'react';
import NormalComp from './src/components/NormalComp';
import PureComp from './src/components/PureComp';


export default class Purecom extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        setInterval(() =>{
         this.setState({title:this.state.title+1});
        },1000);
    }

  render() {
    console.log('########### parent component#######')
    return (
    <View style={{marginTop:50}}>
        <Text style ={{fontSize:20,
        fontWeight:'800',
        textAlign:'center',
        color:'blue'}}>Parent components</Text>
      <NormalComp title={this.state.title}/>
      <PureComp title={this.state.title}/>
    </View>
     );
  }
}
