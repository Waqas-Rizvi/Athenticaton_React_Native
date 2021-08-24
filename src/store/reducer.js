const INITIAL_STATE = {
    htmlquestions: [
        {
            question: "What does HTML stand for?",
            options: [
                "Hyper Text Markup Language",
                "Home Tool Markup Language",
                "Hyperlinks and Text Markup Language"
            ],
            correctAns: "Hyper Text Markup Language"
        },
        {
            question: "Choose the correct HTML element for the largest heading.",
            options: [
                "<h6>",
                "<h1>",
                "<head>",
                "<heading>"
            ],
            correctAns: "<h1>"
        },
        {
            question: "What is the correct HTML element for inserting a line break?",
            options: [
                "<br>",
                "<break>",
                "<lb>"
            ],
            correctAns: "<br>"
        },
        {
            question: "Choose the correct HTML element to define important text.",
            options: [
                "<important>",
                "<b>",
                "<strong>",
                "<i>"
            ],
            correctAns: "<strong>"
        }
    ]
}

export default (state = INITIAL_STATE) => {
    return state
}