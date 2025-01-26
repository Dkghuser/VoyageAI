import { createChatBotMessage } from "react-chatbot-kit";

const config = {
    botName: "VoyageAI: AI Travel Guide",
    initialMessages: [
        createChatBotMessage(`Hello! I am VoyageAI, an AI Travel Guide. I can help you plan your next trip and provide travel recommendations.`)
    ],
//    customStyles: {
//        botMessageBox: {
//            backgroundColor: "#4a90e2", // theme customization
//        },
//        chatButton: {
//            backgroundColor: "#4a90e2", // Button color customization
//        },
//    },
}

export default config