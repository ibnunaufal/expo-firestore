import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
// import { auth } from '../firebase'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import * as auth from 'firebase/auth'


export default function LoginScreen({navigation}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const provider = new GoogleAuthProvider();

    const handleSignUp = () => {
        console.log("signing up")
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user
                console.log(user)
            })
    }

    const handleSignIn = () => {
        const auth = getAuth()
        auth.signInWithEmailAndPassword(auth,email,password)
            .then(userCredentials => {
                const user = userCredentials.user
                console.log(user)
            })
    }

    const handleSignWithGoogle = () => {
        const authh = getAuth()
        signInWithPopup(authh, provider).then((res) => {
            const user = res.user
            console.log(user)
        })
    }
    function goLogin(){
        navigation.navigate("Home")
    }
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Firestore App</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Email'
                    value={email}
                    onChangeText={ text => setEmail(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder='Password'
                    value={password}
                    onChangeText={ text => setPassword(text)}
                    secureTextEntry
                    style={styles.input}
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                onPress={() => goLogin()}
                style={styles.button}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => handleSignUp() }
                style={styles.buttonOutline}
                >
                    <Text style={styles.buttonTextOutline}>Register</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    inputContainer:{
        width:'100%',
        padding:20
    },
    input:{
        width:'100%',
        backgroundColor:'white',
        paddingVertical:10,
        marginVertical:10,
        borderRadius:5,
        textAlign:'center'
    },
    buttonContainer:{
        width:'100%',
        paddingHorizontal:20
    },
    button:{
        backgroundColor:'blue',
        padding:10,
        borderRadius:5,
        marginVertical:5
    },
    buttonText:{
        color:'white',
        textAlign:'center'
    },
    buttonOutline:{
        borderColor:'blue',
        borderWidth:1,
        padding:10,
        borderRadius:5,
        marginVertical:5
    },
    buttonTextOutline:{
        color:'blue',
        textAlign:'center'
    },
    titleContainer:{
        padding:10
    },
    title:{
        fontSize:25,
        fontWeight:'600'
    }

})