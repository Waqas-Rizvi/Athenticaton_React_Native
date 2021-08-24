import React, { useState } from 'react'
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'


export const html = ({ navigation }) => {
    let state = useSelector(state => state)
    let total = state.htmlquestions.length
    const back = () => navigation.navigate("Home")
    const [result, setresult] = useState(false)
    const [quesno, setquesno] = useState(0)
    const [score, setscore] = useState(0)
    const next = () => setquesno(quesno + 1)
    const check = (e) => {
        let selectval = e
        let correctval = state.htmlquestions[quesno].correctAns

        if (selectval == correctval) {
            setscore(score + 1)
        }

        if (quesno + 1 != state.htmlquestions.length) {
            next()
        } else {
            setresult(true)
        }
    }
    let percentage = score / total * 100

    return (

        <View style={{ flex: 1 }}>
            <ImageBackground style={styles.background} resizeMode="cover" source={{ uri: "https://i.pinimg.com/originals/d6/cb/e0/d6cbe01ac6372a505d6e86a31a1e5e23.png" }}>
                {result ?
                    <View style={styles.background}>
                        <Text style={styles.resultbtn}>Result</Text>
                        <Text style={styles.result}>Total Questions: {total}</Text>
                        <Text style={styles.result}>Marks: {score}/{total}</Text>
                        <Text style={styles.result}>Percentage: {percentage}%</Text>
                        <Text style={styles.result}>{percentage < 40 ? "Fail" : "Pass"}</Text>
                        <TouchableOpacity>
                            <Text onPress={back} style={styles.backbutton}>Back to Home</Text>
                        </TouchableOpacity>
                    </View>
                    :
                    <View style={styles.background}>
                        <View>
                            <Text style={styles.questionNo}>Q#{quesno + 1}/{total}</Text>
                        </View>
                        <View>
                            <Text style={styles.question}>{state.htmlquestions[quesno].question}</Text>
                        </View>
                        {state.htmlquestions[quesno].options.map((e, i) => {
                            return (
                                <View>
                                    <TouchableOpacity key={i}>
                                        <Text onPress={() => check(e)} style={styles.button}>{e}</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        })}
                        <View>
                            <TouchableOpacity>
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
        backgroundColor: "#c40a0d",
        color: "white",
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
        marginTop: 60
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
        marginBottom: 60
    },
    result: {
        color: "#c40a0d",
        fontSize: 30,
        fontWeight: "bold",
    }
})