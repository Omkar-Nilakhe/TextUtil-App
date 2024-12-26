

import React, { useState } from 'react'

export default function Textform(props) {

    const [Text, setText] = useState("Write text here");

    const handleonChange = (event) => {
        console.log("handle onChange called");
        setText(event.target.value);


    }
    const handleupClick = () => {
        console.log("uppercase called" + Text);
        let newtext = Text.toUpperCase();
        setText(newtext);
        props.showAlert("Successfully converted to uppercase","success");

    }

    const handleloClick = () => {
        console.log("lowercase called" + Text);
        let newtext = Text.toLowerCase();
        setText(newtext);
        props.showAlert("Successfully converted to lowercase","success");

    }

    const handleclearClick = () => {
        let newtext = "";
        setText(newtext);

    }

    const handleCopy = () => {
        navigator.clipboard.writeText(Text);
    }

    const SpeakClick = () => {
        const msg = new SpeechSynthesisUtterance();
        msg.text = Text;
        window.speechSynthesis.speak(msg);
    }

    const CapitalizedCase=()=>{
        let newText=Text.charAt(0).toUpperCase() + Text.slice(1);
        setText(newText)
    }

    const removeExtraspaces = () => {
        let newtext = Text.split(/[ ]+/);
        setText(newtext.join(" "));

    }

    return (
        <div>
            <div className="container mb-4" style={{color:props.mode==='dark'?'white':'black'}}>
                <label htmlFor="exampleFormControlTextarea1" className="form-label"><b>Text Converter- Uppercase | Lowercase | Remove extra spaces | Copy Text</b></label>
                <textarea className="form-control" value={Text} onChange={handleonChange} id="exampleFormControlTextarea1" rows="8" 
                style={{backgroundColor:props.mode==='dark'?'#486464':'white',color:props.mode==='dark'?'white':'black'}}></textarea>

            </div>
            <div className="container">
                <button disabled={Text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleupClick} type="submit">Convert to uppercase</button>
                <button disabled={Text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleloClick} type="submit">Convert to lowercase</button>
                <button disabled={Text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleclearClick} type="submit">Clear Text</button>
                <button disabled={Text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy} type="submit">Copy Text</button>
                <button disabled={Text.length===0} className="btn btn-primary mx-2 my-1" onClick={SpeakClick} type="submit">Speak Text</button>
                <button disabled={Text.length===0} className="btn btn-primary mx-2 my-1" onClick={CapitalizedCase} type="submit">Capitalized Text</button>
                <button disabled={Text.length===0} className="btn btn-primary mx-2 my-1" onClick={removeExtraspaces} type="submit">Remove space</button>
                <button disabled={Text.length===0} className="btn btn-primary mx-2 my-1"  type="submit">Remove space2</button>
                <button disabled={Text.length===0} className="btn btn-primary mx-2 my-1"  type="submit">Remove space1</button>
                
            </div>

            <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
                <h2>Summary</h2>
                <p>{Text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {Text.split(" ").filter((element)=>{return element.length!==0}).length} characters</p>
                <p>It takes {0.008 * Text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read  </p>
                <h2>Preview</h2>
                <p>{Text.length>0?Text:'Nothing to Preview!'}</p>
            </div>
        </div>
    )
}
