
import { FunctionComponent } from "preact";
import {WordResponse }  from "../types.ts";
import { useState }  from "preact/hooks";



const WordCSR: FunctionComponent = () =>{
    const [word,setWord] = useState("");
    /*const fetchWords = async()=>{
        const response = await fetch ("/api/dictionary");
        const data : WordResponse = await response.json();
        setWord(data);
    }*/

    return(
        <div>
            <form>
                <input type = "text" name= "word" placeholder="Type a word"/>
                <button onClick={() => setWord(word.valueOf)}>Search</button>
                <p></p>


            </form>

        </div>
    )

}

export default WordCSR;