import React from 'react';
import { TextInput, SafeAreaView, StyleSheet, ScrollView, View, Text, Button, StatusBar, Alert} from 'react-native';

class Header extends React.Component {
    render() {
      return (
        <View style={styles.header}>
            <Button
                title="Go to Footer"
                onPress={() =>
                    this.props.navigation.navigate('Page')}
            />
        </View>
      );
    }
  }


const styles = StyleSheet.create({
  header : {
    height: 60,
    padding: 10,
    backgroundColor : '#006400'
  },
  text:{
    color: 'white',
    fontSize: 30,
    textAlign: 'center'
  }
});

export default Header;