import React, { useState } from 'react'
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { useSelector } from 'react-redux'


export const css = ({ navigation }) => {
    let state = useSelector(state => state)
    let total = state.cssquestions.length
    const [result, setresult] = useState(false)
    const [quesno, setquesno] = useState(0)
    const [selectedvalue, setselectedvalue] = useState("")
    const backhome = () => {
        navigation.navigate("Home")
        setquesno(0)
        setresult(false)
    }
    const [score, setscore] = useState(0)
    const next = () => setquesno(quesno + 1)
    const back = () => setquesno(quesno - 1)
    let permarks = 3

    const check = () => {
        let correctval = state.cssquestions[quesno].correctAns
        if (selectedvalue == correctval) {
            setscore(score + permarks)
        }

        if (quesno + 1 != state.cssquestions.length) {
            next()
        } else {
            setresult(true)
        }
    }

    const backk = () => {
        if (quesno == 0) {
            backhome()
        } else {
            setscore(score - permarks)
            back()
        }
    }

    const optselect = (e) => {
        setselectedvalue(e)
    }

    let percentage = score / (total * permarks) * 100
    let roundpercentage = Math.round(percentage)

    return (

        <View style={{ flex: 1 }}>
            <ImageBackground style={styles.background} resizeMode="cover" source={{ uri: "https://i.pinimg.com/originals/d6/cb/e0/d6cbe01ac6372a505d6e86a31a1e5e23.png" }}>
                {result ?
                    <View style={styles.background}>
                        <Text style={styles.resultbtn}>Result</Text>
                        <Image style={{height: 150, width: 150}} source={{uri: state.pic}}/>
                        <Text style={styles.result}>Total Questions: {total}</Text>
                        <Text style={styles.result}>Marks: {score}/{total * permarks}</Text>
                        <Text style={styles.result}>Percentage: {roundpercentage}%</Text>
                        <Text style={styles.result}>{percentage < 40 ? "Fail" : "Pass"}</Text>
                        <TouchableOpacity>
                            <Text onPress={backhome} style={styles.backbutton}>Back to Home</Text>
                        </TouchableOpacity>
                    </View>
                    :
                    <View style={styles.background}>
                        <View>
                            <Text style={styles.questionNo}>Q#{quesno + 1}/{total}</Text>
                        </View>
                        <View>
                            <Text style={styles.question}>{state.cssquestions[quesno].question}</Text>
                        </View>
                        {state.cssquestions[quesno].options.map((e, i) => {
                            let color = ""
                            let background = ""
                            if (selectedvalue != e) {
                                color = "#c40a0d"
                                background = "white"
                            } else {
                                color = "white"
                                background = "#c40a0d"
                            }

                            return (
                                <View key={i}>
                                    <TouchableOpacity>
                                        <Text onPress={() => optselect(e)} style={[styles.button, { backgroundColor: background, color: color }]}>{e}</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        })}
                        <View>
                            <TouchableOpacity style={{ flexDirection: "row" }}>
                                <Text onPress={backk} style={styles.nextbutton}>Back</Text>
                                <Text onPress={check} style={styles.nextbutton}>Next</Text>
                            </TouchableOpacity>
                        </View>
                    </View>}
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
    question: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#c40a0d",
        margin: 10,
        textAlign: "center"
    },
    questionNo: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#c40a0d"
    },
    button: {
        fontSize: 20,
        padding: 15,
        margin: 10,
        borderRadius: 50,
        width: 350,
        textAlign: "center",
        fontWeight: "bold"
    },
    nextbutton: {
        fontSize: 24,
        color: "#c40a0d",
        margin: 10,
        width: 150,
        textAlign: "center",
        fontWeight: "bold"
    },
    backbutton: {
        fontSize: 20,
        backgroundColor: "#c40a0d",
        color: "white",
        padding: 15,
        margin: 10,
        borderRadius: 50,
        width: 170,
        textAlign: "center",
        fontWeight: "bold",
        marginTop: 10
    },
    resultbtn: {
        fontSize: 30,
        backgroundColor: "#c40a0d",
        color: "white",
        padding: 15,
        margin: 20,
        borderRadius: 50,
        width: 300,
        textAlign: "center",
        fontWeight: "bold",
        marginBottom: 20
    },
    result: {
        color: "#c40a0d",
        fontSize: 30,
        fontWeight: "bold",
    }
})