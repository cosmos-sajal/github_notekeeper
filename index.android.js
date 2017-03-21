import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  TouchableHighlight
} from 'react-native';
import Main from './src/components/main';
import Second from './src/components/second';

export default class githubNotekeeper extends Component {
  constructor(props) {
    super(props);

  }

  navigatorRenderScene(route, navigator) {
    _navigator = navigator;
    switch(route.id) {
      case 'first': 
        return(
          <Main navigator={navigator} title={route.title} />
        );
        break;
      case 'second':
        return(
          <Second navigator={navigator} title={route.title} />
        );
    }
  }

  render() {
    return (
      <Navigator style={styles.container}
        initialRoute={{
          title: 'Github Notekeeper',
          id : 'first'
        }}
        renderScene={this.navigatorRenderScene}
        navigationBar={
           <Navigator.NavigationBar
             routeMapper={{
               LeftButton: (route, navigator, index, navState) =>
                { 
                  switch(route.id) {
                    case 'first':
                      break;
                    default:
                      return (
                        <TouchableHighlight onPress={() => navigator.pop()}>
                          <Text>Back</Text>
                        </TouchableHighlight>
                      );
                  }
                },
               RightButton: (route, navigator, index, navState) =>
                { switch(route.id) {
                    case 'second':
                      break;
                    default:
                      return (
                        <TouchableHighlight onPress={() => navigator.push({id: 'second'})}>
                          <Text>Forward</Text>
                        </TouchableHighlight>
                      );
                  } 
                },
               Title: (route, navigator, index, navState) =>
                 {  
                   switch(route.id) {
                      case 'first':
                        return (<Text>Github bhai</Text>);
                      default:
                        return (<Text>Awesome Nav Bar</Text>);
                    } 
                 },
             }}
           />
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#ffffff'
  },
});

AppRegistry.registerComponent('githubNotekeeper', () => githubNotekeeper);
