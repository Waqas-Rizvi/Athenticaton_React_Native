import React, { useState } from 'react'
import { View, Text, StyleSheet, ImageBackground, TextInput, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import auth from '@react-native-firebase/auth';

export const Signup = ({ navigation }) => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [name, setname] = useState("")
    const screen = () => navigation.navigate("Login")
    const validate = (name, email, password) => {
        if (!name || !email || !password) {
            return false;
        }
        return true;
    }
    const signup = () => {
        let isValidate = validate(name, email, password);
        if (!isValidate) {
            alert('Please enter valid data');
        } else {
            auth()
                .createUserWithEmailAndPassword(email, password)
                .then(() => {
                    screen()
                })
                .catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                        alert('That email address is already in use!');
                    }

                    if (error.code === 'auth/invalid-email') {
                        alert('That email address is invalid!');
                    }

                    if (error.code === 'auth/weak-password') {
                        alert('Password should be at least 6 characters');
                    }
                });
        }
    }


    return (
        // <ScrollView>
        <View style={{ flex: 1 }}>
            <ImageBackground style={styles.background} resizeMode="cover" source={{ uri: "https://i.pinimg.com/originals/d6/cb/e0/d6cbe01ac6372a505d6e86a31a1e5e23.png" }}>
                <View>
                    <Text style={{ fontSize: 40, fontWeight: "bold", color: "#c40a0d", marginBottom: 10 }}>Signup Form</Text>
                </View>
                <View>
                    <SafeAreaView>
                        <TextInput
                            onChangeText={(text) => setname(text)}
                            style={styles.input}
                            placeholder="Enter your username"
                            keyboardType="default"
                        />
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
                    <TouchableOpacity onPress={signup}>
                        <Text style={styles.button}>Signup</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                        <Text style={styles.button2}>Login</Text>
                    </TouchableOpacity>
                </View>

            </ImageBackground>
        </View>
        // </ScrollView>
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