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

       const delayPara=(index, nextWord)=>{
           setTimeout(function (){
            setResultData(prev=>prev+nextWord)
           },30*index)
       }

    const  onSent = async (prompt)=>{

        setResultData("");
        setLoading(true);
        setShowResult(true);
        setRecentPrompt(input);
       const response = await runChat(input);

       let responseArray = response.split("**");
       let newResponse="";
       for(let i = 0; i < responseArray.length; i++)
       {
         if(i === 0 || i % 2 !== 1){
            newResponse += responseArray[i];
         }
         else{
           newResponse += "<b>" + responseArray[i] + "</b>";
         }
       }

       let newResponse2=newResponse.split("*").join("</br>")
       let newResponceArray = newResponse2.split("");
       for(let i=0; i<newResponceArray.length; i++)
       { 
        const nextWord = newResponceArray[i];
        delayPara(i,nextWord+"")

       }
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