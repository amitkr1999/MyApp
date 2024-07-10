import React, { useState } from 'react';

// useState -- this is a hook. Hooks are used only inside functions
export default function TextForm(props) {

  const handleUpCase = () => {
    //console.log("Uppercase was clicked" + text);
    //setText is a state function that is used to change the text 
    setText(text.toUpperCase());
    props.showAlert("Converted to Uppercase", "success")
  }

  const handleLowerCase = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to Lowercase", "success")
  }
  
  const handlecleartext = () => {
    setText('');
    props.showAlert("Converted to Cleartext", "success")
  }

  const handleOnChange = (event) => {
    //console.log("On change");
    setText(event.target.value);
  }

  const [text, setText] = useState('');

  return (
    <>
    <div className='conatiner' style={{color : props.mode === 'dark' ? 'white': '#03010e'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} /*style={{backgroundColor : props.mode === 'dark' ? 'dark': 'grey', color : props.mode === 'dark' ? 'white': '#09065e'}}*/id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpCase} style={{ marginRight: '10px' }}>Convert to Uppercase</button>
      <button className="btn btn-primary" onClick={handleLowerCase} style={{ marginRight: '10px' }}>Convert to Lowercase</button>
      <button className="btn btn-primary" onClick={handlecleartext}>Clear Text</button>
    </div>
    <div className="container my-2" style={{color : props.mode === 'dark' ? 'black': '#03010e'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} Words and {text.length} Charaters</p>
      <p>{0.008*(text.split(" ").length)} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>

    </div>
    </>
  );
}
