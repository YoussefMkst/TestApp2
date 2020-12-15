import React from 'react'
import { TouchableOpacity, StyleSheet, View , Button, Text , TextInput} from 'react-native'

class GeneralObservations extends React.Component{

    render(){
        return(
            <View style={styles.titleWrapper}>
                <Text style={styles.text}>General Observation</Text>
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
        backgroundColor: "#78E3F0",
    }
});

export default GeneralObservations;