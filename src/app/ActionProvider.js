class ActionProvider {
    createChatBotMessage
    setState
    createClientMessage
    stateRef
    createCustomMessage

    constructor(
      createChatBotMessage,
      setStateFunc,
      createClientMessage,
      stateRef,
      createCustomMessage,
      ...rest
    ) {
      this.createChatBotMessage = createChatBotMessage
      this.setState = setStateFunc
      this.createClientMessage = createClientMessage
      this.stateRef = stateRef
      this.createCustomMessage = createCustomMessage
    }

    callGenAI = async (prompt) => {
        try {
          const res = await fetch("/api/chat", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ prompt })
          });
          if (!res.ok) throw new Error('API error');
          const data = await res.json();
          return data.content;
        } catch (err) {
          return "Sorry, there was an error generating a response.";
        }
    }

    timer = ms => new Promise(res => setTimeout(res, ms));

    generateResponseMessages = async (userMessage)  => {
        const responseFromGPT = await this.callGenAI(userMessage);
        let message;
        let numberOfLines = responseFromGPT.split("\n").length;
        for(let i=0; i<numberOfLines; i++){
            const msg = responseFromGPT.split("\n")[i];
            if(msg.length){
                console.log('KW101', msg);
                message = this.createChatBotMessage(msg);
                this.updateChatbotState(message);
            }
            await this.timer(1000);
        }
    }

    respond = (message) => {
        this.generateResponseMessages(message)
    }

    updateChatbotState = (message) => {
        this.setState(prevState => ({
            ...prevState, messages: [...prevState.messages, message]
        }))
    }
}

export default ActionProvider;
