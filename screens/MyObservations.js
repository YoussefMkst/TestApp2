import React from 'react'
import { TouchableOpacity, StyleSheet, View , Button, Text , TextInput} from 'react-native'


class MyObservations extends React.Component{
    constructor () {
        super();
        this.state = {
            photo: null
        };
    }

    // handleChoosePhoto = () => {
    //     const options = {
    //       noData: true,
    //     }
    //     ImagePicker.launchImageLibrary(options, response => {
    //       if (response.uri) {
    //         this.setState({ photo: response })
    //       }
    //     })
    //   }
    
    render(){
        return(
            <View style={styles.titleWrapper}>
                <Text style={styles.text}>My Observations</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    text:{
        fontSize: 40,
        textAlign: 'center',
        paddingTop: 30,
        paddingBottom: 33
    },
    titleWrapper:{
        backgroundColor: "#A3F0BA",
    }
});

export default MyObservations;