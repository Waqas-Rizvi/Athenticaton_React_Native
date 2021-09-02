import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { RNCamera } from 'react-native-camera';
import { useDispatch } from 'react-redux';

const PendingView = () => (
    <View
        style={{
            flex: 1,
            backgroundColor: 'lightgreen',
            justifyContent: 'center',
            alignItems: 'center',
        }}
    >
        <Text>Waiting</Text>
    </View>
);

export const camera = ({ navigation }) => {
    const dispatch = useDispatch()
    const screen = () => navigation.navigate("Home")
    const takePicture = async function (camera) {
        const options = { quality: 0.5, base64: true };
        const data = await camera.takePictureAsync(options);
        const image = data.uri
        dispatch({
            type: "PIC",
            pic: image
        })
        screen()
    };

    return (
        <View
            style={{
                flex: 1,
                flexDirection: 'column',
                backgroundColor: 'black',
            }}>
            <RNCamera
                style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                }}
                type={RNCamera.Constants.Type.front}
            >
                {({ camera, status, recordAudioPermissionStatus }) => {
                    if (status !== 'READY') return <PendingView />;
                    return (
                        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                            <TouchableOpacity onPress={() => takePicture(camera)} style={styles.takepic}>
                                <Text style={styles.snapbtn}> Take Picture </Text>
                            </TouchableOpacity>
                        </View>
                    );
                }}
            </RNCamera>
        </View>
    )
}

const styles = StyleSheet.create({
    snapbtn: {
        fontSize: 20,
        backgroundColor: "#c40a0d",
        color: "white",
        padding: 10,
        borderRadius: 50,
        width: 170,
        textAlign: "center",
        fontWeight: "bold",
        opacity: .5
    },
    takepic: {
        flex: 0,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20
    }
})