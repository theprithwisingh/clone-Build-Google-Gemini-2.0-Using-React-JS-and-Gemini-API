import { createContext, useState } from "react";
import runChat from "../Config/Gemini";

export const Context = createContext();

const ContextProvider = (props)=>{
       const[input,setInput]=useState("");
       const[recentPrompt,setRecentPrompt]=useState("");
       const[prevPrompt,setPrevPrompt]=useState([]);
       const[showResult,setShowResult]=useState(false);
       const[loading,setLoading]=useState(false);
       const[resultData,setResultData]=useState("");

    const  onSent = async (prompt)=>{

        setResultData("");
        setLoading(true);
        setShowResult(true);
        setRecentPrompt(input);
       const response = await runChat(input);
       setResultData(response);
       setLoading(false);
       setInput("");
    }
    // onSent("what is earth with image example")
    const contextValue = {
          prevPrompt,
          setPrevPrompt,
          onSent,
          setRecentPrompt,
          recentPrompt,
          showResult,
          loading,
          resultData,
          input,
          setInput
    }

    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;