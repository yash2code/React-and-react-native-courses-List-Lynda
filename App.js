import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import ReactCourses from './ReactCourses';
import NativeCourses from './NativeCourses';
import { Constants } from 'expo';


const Courses = TabNavigator({
  ReactCourses: { screen: ReactCourses },
  NativeCourses: { screen: NativeCourses },
}, {
  tabBarOptions: {
    activeTintColor: 'pink',
    swipeEnabled: true,
    showIcon:true,
    inactiveTintColor: '#555',

    style:{

      backgroundColor:'red'

    },
     
  },

  tabBarPosition: 'bottom',
  animationEnabled:true,
 
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Courses style={{ width: Dimensions.get('window').width }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#555',
  }
});
