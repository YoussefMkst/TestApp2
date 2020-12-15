import React from 'react'
import { TouchableOpacity, StyleSheet, View , Button, Text , TextInput} from 'react-native'
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";


class NewObservation extends React.Component{

    constructor () {
        super();
        this.state = {
            coordinates:{'latitude': 37.78825, 'longitude': -122.4324}
        };
    }

    render(){
        return(
            <View style={styles.titleWrapper}>
                <Text style={styles.text}>Hello</Text>

                <MapView
                    style={{flex: 0.5}}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.05,
                        longitudeDelta: 0.05
                    }}
                    onPress={(e) => this.setState({ coordinates: e.nativeEvent.coordinate})}>
                        
                    <Marker
                        draggable={true}
                        coordinate={this.state.coordinates}
                        onDragEnd={(e) => this.setState({ coordinates: e.nativeEvent.coordinate})}
                    />
                </MapView>

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
        backgroundColor: "#F0B478",
        flex: 1
    }
});

export default NewObservation;