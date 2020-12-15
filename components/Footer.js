import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, Button, StatusBar, Alert} from 'react-native';


class Footer extends React.Component {
    render() {
      return (
        <View style={styles.header}>
            <Text style={styles.text}> Hello Toto</Text>
        </View>
      );
    }
  }


const styles = StyleSheet.create({
  header : {
    height: 60,
    padding: 10,
    backgroundColor : '#cb4154'
  },
  text:{
    color: 'white',
    fontSize: 30,
    textAlign: 'center'
  }
});

export default Footer;