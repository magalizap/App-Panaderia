import { StyleSheet,  KeyboardAvoidingView, TextInput, Button, View, Text } from 'react-native'
import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {COLORS} from '../constants/colors'
import { signUp } from '../store/actions/auth.action'
const AuthScreen = () => {

    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignUp = () => {
        dispatch(signUp(email, password))
    }

  return (
    <KeyboardAvoidingView style={styles.screen} behavior='padding' keyboardVerticalOffset={50}> 
        <View style={styles.container}>
            <Text style={styles.title}>Tu panadería: login</Text>
            <View>
                <TextInput
                    style={styles.input}
                    id='email'
                    placeholder='email'
                    keyboardType='email-address'
                    autoCapitalize='none'
                    onChangeText={setEmail}
                    initialValue=''
                />

                <TextInput
                    style={styles.input}
                    id='password'
                    placeholder='password'
                    keyboardType='default'
                    secureTextEntry
                    minlength={6}
                    autoCapitalize='none'
                    onChangeText={setPassword}
                    initialValue=''
                />
            </View>
            <View>
                <Button
                    title='Registrame' color={COLORS.primary}
                    onPress={handleSignUp}
                />
            </View>
        </View>

    </KeyboardAvoidingView>
  )
}

export default AuthScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: '80%',
        maxWidth: 400,
        backgroundColor: '#fff',
        height: '50%',
        padding: 15,
        borderRadius: 4
    },
    title: {
        fontSize: 24,
        marginBottom: 18,
        marginLeft: 30
    },
    input: {
        height: 40,
        margin: 12,
        padding: 10,
        borderWidth: 1,
        borderRadius: 4
        
    }
})