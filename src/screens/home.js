import React from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import auth from '@react-native-firebase/auth';

export const Home = ({ navigation }) => {

    const screen = () => navigation.navigate("Login")

    const sign_out = () => {
        auth() 
            .signOut()
            .then(() => screen());
    }

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground style={styles.background} resizeMode="cover" source={{ uri: "https://i.pinimg.com/originals/d6/cb/e0/d6cbe01ac6372a505d6e86a31a1e5e23.png" }}>

                <View>
                    <TouchableOpacity onPress={() => navigation.navigate("HTML")}>
                        <Text style={styles.button}>HTML Quiz</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate("CSS")}>
                        <Text style={styles.button}>CSS Quiz</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate("JavaScript")}>
                        <Text style={styles.button}>JavaScript Quiz</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={sign_out}>
                        <Text style={styles.button2}>Sign Out</Text>
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

