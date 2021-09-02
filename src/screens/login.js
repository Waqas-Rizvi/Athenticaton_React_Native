import React, { useState } from 'react'
import { View, Text, StyleSheet, ImageBackground, TextInput, SafeAreaView, TouchableOpacity } from 'react-native'
import auth from '@react-native-firebase/auth';

export const Login = ({ navigation }) => {

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const screen = () => navigation.navigate("Camera")

    const login = () => {

        if (email != "" && password != "") {
            auth()
                .signInWithEmailAndPassword(email, password)
                .then(() => {
                    screen()
                })
                .catch(error => {
                    if (error.code === 'auth/invalid-email') {
                        alert('That email address is invalid!');
                    }

                    if (error.code === 'auth/too-many-requests') {
                        alert('Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.');
                    }

                    if (error.code === 'auth/wrong-password') {
                        alert('The password is invalid or the user does not have a password.');
                    }

                    if (error.code === 'auth/user-not-found') {
                        alert('There is no user record corresponding to this identifier.');
                    }
                });
        } else {
            alert("Enter email or password")
        }
        
            
    }


    return (
        <View style={{ flex: 1 }}>
            <ImageBackground style={styles.background} resizeMode="cover" source={{ uri: "https://i.pinimg.com/originals/d6/cb/e0/d6cbe01ac6372a505d6e86a31a1e5e23.png" }}>

                <View>
                    <Text style={{ fontSize: 40, fontWeight: "bold", color: "#c40a0d" }}>Login</Text>
                </View>

                <View>
                    <SafeAreaView>
                        <TextInput
                            onChangeText={(text) => setemail(text)}
                            style={styles.input}
                            placeholder="Enter email address"
                            keyboardType="email-address"
                        />
                        <TextInput
                            onChangeText={(text) => setpassword(text)}
                            style={styles.input}
                            placeholder="Enter password"
                            keyboardType="default"
                            secureTextEntry={true}
                        />
                    </SafeAreaView>
                </View>

                <View>
                    <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                        <Text style={styles.button2}>Signup</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={login}>
                        <Text style={styles.button}>Login</Text>
                    </TouchableOpacity>
                </View>

            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 350,
        fontSize: 20,
        height: 60,
        borderRadius: 10,
        borderColor: "#c40a0d"
    },
    button: {
        fontSize: 30,
        backgroundColor: "#c40a0d",
        color: "white",
        padding: 15,
        margin: 20,
        borderRadius: 50,
        width: 300,
        textAlign: "center"
    },
    button2: {
        color: "#c40a0d",
        fontSize: 20
    }
})