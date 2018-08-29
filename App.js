import React, {Component} from 'react';
import {AppRegistry, Image, Button, Text, TextInput, View, Alert} from 'react-native';
import ToastExample from './ToastExample';
import BluetoothAdapter from './BluetoothAdapter';

export default class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.state = {text:''};
  }

  render() {
    return (
      <View style = {{ flex:1}} >
        <View style = {{ flex:90, backgroundColor:'#CCCCCC'}}>
          <TextInput style = {{height:40}} placeholder = "Enter your email"/>
          <Button onPress={() => {
              BluetoothAdapter.sayHello( (success) => {
                ToastExample.show( success, ToastExample.LONG);
              }, (err) => {
                ToastExample.show( err, ToastExample.LONG);
              })

          }}
            title = 'Press me'
          />
        </View>
        <View style = {{ flex:10, backgroundColor:'#333333'}} />
      </View>
    );
  }
}

// class ListItem extends Component {
//   render() {
//     return(
//       <Text>Hello {this.props.name}!</Text>
//     );
//   }
// }
//
// class Blink extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {isShowingText: true};
//     setInterval( () => {
//       this.setState( previousState => {
//         return { isShowingText: !previousState.isShowingText };
//       });
//     }, 1000);
//   };
//   render() {
//     let display = this.state.isShowingText ? 'Hello ' + this.props.text : ' ';
//     return(
//       <Text>{display}</Text>
//     );
//   }
// }

AppRegistry.registerComponent('awesomeproject', () => HelloWorld);
