import React from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Button, Text , TextInput} from 'react-native';
import emailValidator from '../validators/emailValidator'
import passwordValidator from '../validators/passwordValidator'

//import TextInput from '../components/TextInput';

class LoginScreen extends React.Component{

    constructor () {
        super();
        this.state = {
            emailError:"",
            email:"",
            password:"",
            passwordError:"",
        };
      }
    
    // Handle requests
    loginSubmit = () => {
        console.log(emailValidator(this.state.email));
        console.log(passwordValidator(this.state.password));
        console.log(this.state.password);
        this.setState({
            email:"",
            emailError: emailValidator(this.state.email),
            password:"",
            passwordError: passwordValidator(this.state.password)
        });
    }

    render(){
        return(
            <View>
                <Text style={styles.text}>Login</Text>
    
                <View style={{padding: 20}}>
                    {!!this.state.emailError ? <Text style={styles.error}>{this.state.emailError}</Text> : null}
                    <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={text => this.setState({
                        email: text
                    })}
                    value={this.state.email}
                    placeholder={" Enter Email"}
                    error={true}
                    errorText={"error"}
                    />
                </View>

                <View style={{padding: 20}}>
                    {!!this.state.passwordError ? <Text style={styles.error}>{this.state.passwordError}</Text> : null}
                    <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText= {text => this.setState({
                        password: text
                    })}
                    value={this.state.password}
                    placeholder={" Enter password"}
                    secureTextEntry={true}
                    />
                    <View style={styles.forgotPassword}>
                        <TouchableOpacity>                        
                        <Text style={styles.forgot}>Forgot your password?</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{padding: 20}}>
                    <Button  title="Login" onPress={this.loginSubmit}/>
                    <View style={styles.row}>
                        <Text>Don’t have an account? </Text>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Signup')}}>
                        <Text style={styles.link}>Sign up</Text>
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
})

export default LoginScreen;