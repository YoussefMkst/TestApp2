import React from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Button, Text , TextInput} from 'react-native';
import emailValidator from '../validators/emailValidator'
import passwordValidator from '../validators/passwordValidator'
import nameValidator from '../validators/nameValidator'


//import TextInput from '../components/TextInput';

class SignupScreen extends React.Component{

    constructor () {
        super();
        this.state = {
            name:"",
            nameError:"",
            emailError:"",
            email:"",
            password:"",
            passwordError:"",
        };
      }
    
    // Handle requests
    signupSubmit = () => {
        console.log(emailValidator(this.state.email));
        console.log(passwordValidator(this.state.password));
        console.log(this.state.password);
        this.setState({
            email:"",
            emailError: emailValidator(this.state.email),
            password:"",
            passwordError: passwordValidator(this.state.password),
            name:"",
            nameError: nameValidator(this.state.name),
        });
    }

    render(){
        return(
            <View>
                <Text style={styles.text}>Sign Up</Text>

                <View style={styles.inputViews}>
                    <Text style={styles.label}>Name:</Text>
                    <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={text => this.setState({
                        name: text
                    })}
                    value={this.state.name}
                    placeholder={" Enter name"}
                    />
                    {!!this.state.nameError ? <Text style={styles.error}>{this.state.nameError}</Text> : null}
                </View>
    
                <View style={styles.inputViews}>
                    <Text style={styles.label}>Email:</Text>
                    <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={text => this.setState({
                        email: text
                    })}
                    value={this.state.email}
                    placeholder={" Enter Email"}
                    />
                    {!!this.state.emailError ? <Text style={styles.error}>{this.state.emailError}</Text> : null}
                </View>

                <View style={styles.inputViews}>
                    <Text style={styles.label}>Password:</Text>
                    <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText= {text => this.setState({
                        password: text
                    })}
                    value={this.state.password}
                    placeholder={" Enter password"}
                    secureTextEntry={true}
                    />
                    {!!this.state.passwordError ? <Text style={styles.error}>{this.state.passwordError}</Text> : null}
                </View>

                <View style={styles.inputViews}>
                    <Button  title="Sign up" onPress={this.signupSubmit}/>
                    <View style={styles.row}>
                        <Text>Already signed up? </Text>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Login')}}>
                        <Text style={styles.link}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        );
    }  
}



const styles = StyleSheet.create({
    text:{
        fontSize: 50,
        textAlign: 'center',
        paddingTop: 30,
        paddingBottom: 20

    },
    forgotPassword: {
        width: '100%',
        alignItems: 'flex-end',
        marginBottom: 24,
        paddingTop: 10
    },
    row: {
        flexDirection: 'row',
        marginTop: 4,
    },
    forgot: {
        fontSize: 13,
        color: '#41B6E2',
    },
    link: {
        fontWeight: 'bold',
        color: '#41B6E2',
    },
    error: {
        fontSize: 14,
        color: "red",
        paddingBottom: 6,
    },
    label:{
        fontSize: 17,
        paddingBottom:7,
        fontWeight: 'bold',
    },
    inputViews:{
        paddingHorizontal: 15,
        paddingBottom: 25
    }
})

export default SignupScreen;