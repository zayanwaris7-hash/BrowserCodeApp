import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import { useDispatch, useSelector } from 'react-redux';

function   EditorBox() {
    const dispatch=useDispatch();
    const obj =useSelector((state)=>(state.data));

 // const [language,setlanguage]= useState(obj.name);
    const [valuee, setvalue] = useState(obj.syntax)
    console.log(valuee)

    const handle =(value)=>{
        setvalue(value);
        dispatch(setApiData({name:obj.name,value:valuee}));
    }
   return (
    <Editor
      onChange={(value)=>(handle)}
      height="100%"
      language={obj.language}
      value={valuee}
      theme="vs-dark"
    />
  );
}

export default  EditorBox;