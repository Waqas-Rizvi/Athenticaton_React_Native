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
    ],

    cssquestions: [
        {
            question: "What does CSS stand for?",
            options: [
                "Computer Style Sheets",
                "Creative Style Sheets",
                "Colorful Style Sheets",
                "Cascading Style Sheets"
            ],
            correctAns: "Cascading Style Sheets"
        },
        {
            question: "Where in an HTML document is the correct place to refer to an external style sheet?",
            options: [
                "In the <head> section",
                "In the <body> section",
                "At the end of the document"
            ],
            correctAns: "In the <head> section"
        },
        {
            question: "Which HTML tag is used to define an internal style sheet?",
            options: [
                "<css>",
                "<script>",
                "<style>"
            ],
            correctAns: "<style>"
        },
        {
            question: "Which is the correct CSS syntax?",
            options: [
                "body:color=black;",
                "{body;color:black;}",
                "{body:color=black;}",
                "body {color:black;}"
            ],
            correctAns: "body {color:black;}"
        }
    ],

    jsquestions: [
        {
            question: "Inside which HTML element do we put the JavaScript?",
            options: [
                "<js>",
                "<scripting>",
                "<javascript>",
                "<script>",
            ],
            correctAns: "<script>"
        },
        {
            question: "The external JavaScript file must contain the <script> tag.",
            options: [
                "False",
                "True"
            ],
            correctAns: "False"
        },
        {
            question: "How do you create a function in JavaScript?",
            options: [
                "function:myFunction()",
                "function = myFunction()",
                "function myFunction()"
            ],
            correctAns: "function myFunction()"
        },
        {
            question: "How do you call a function named 'myFunction'?",
            options: [
                "call function myFunction()",
                "call myFunction()",
                "myFunction()"
            ],
            correctAns: "myFunction()"
        }
    ],

    pic: "waqas"
}

export default (state = INITIAL_STATE, action) => {
    // console.log("gggg",action.pic)
    switch (action.type) {
        case "PIC":
            return {
                ...state,
                pic: action.pic
            }
    
    default:
    return state

}}