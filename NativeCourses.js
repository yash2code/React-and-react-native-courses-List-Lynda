import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ListView, Image, Linking } from 'react-native';
import data from './data/courses.json';
import {
  Card,
  CardImage,
  CardTitle,
  CardContent,
  CardAction
} from 'react-native-card-view';

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});
const toDelete = new Set(['react']);
const newData = data.filter(obj => !toDelete.has(obj.category));
const dataSource = ds.cloneWithRows(newData);

export default class NativeCourses extends Component {
  static navigationOptions = {
    tabBarLabel: 'React Native Courses',
    tabBarIcon:({ tintColor }) => (

        <Image
          source={require('./home.png')}
          
          style={[styles.icon, {tintColor: tintColor}]} />

      )
    
  }

 handleClick = (link) => {
    Linking.canOpenURL(link).then(supported => {
      if (supported) {
        Linking.openURL(link);
      } else {
        console.log("Don't know how to open URL: " + link);
      }
    });
  };



  render() {
      const { navigate } = this.props.navigation;
      return (
        <View style={styles.container}>          
        <Text style={styles.welcome}>React Native Courses</Text>
            <ListView
              dataSource={dataSource}
              renderRow={(rowData) =>
                 <Card styles={{card: {backgroundColor: '#00ff00',marginTop:10}}}>
                  <CardImage>
                  <Image source={{uri: rowData.image}}
                   style={{width: 400, height: 200}}
                   />
                   </CardImage>
                  <CardTitle>
                  <Text style={styles.title}>{rowData.title}</Text>
                  </CardTitle>
                  <CardContent>
                  <Text>{rowData.description}</Text>
                  </CardContent>
                  <Text>{rowData.views}</Text>
                  <CardAction>
                  <Text style={styles.action} onPress={() => {
                      this.handleClick(rowData.link)
                    }}>Tap to course</Text>
                  </CardAction>
                 
                </Card>
              }
             />
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap:'wrap',
    backgroundColor: '#F5FCFF',
    paddingTop: 10,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical:'center',
    margin: 10,
  },
   icon: {
    width: 26,
    height: 26,
  },
  title: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 373,
    left: 0,
    fontSize: 15,
    backgroundColor: 'rgba(245, 252, 255, 0.60)',
  },
   action: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#f5fcff'
  },
});

