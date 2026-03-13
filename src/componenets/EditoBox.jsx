import React, { useEffect, useState } from 'react';
import Editor from '@monaco-editor/react';
import { useDispatch, useSelector } from 'react-redux';
import { setApiData } from '../createConext/ApiDataslice'; // Ensure this path is correct

function EditorBox() {
    const dispatch = useDispatch();
    
    // 1. Grab the current language object from Redux
    const obj = useSelector((state) => state.data);

    // 2. Local state for the text currently in the editor
    const [valuee, setvalue] = useState(obj.syntax);

    // 3. THIS IS THE FIX:
    // When obj.id changes (e.g., from 'python' to 'java'), 
    // we MUST manually update the local 'valuee' state.
    useEffect(() => {
        if (obj.syntax) {
            setvalue(obj.syntax);
        }
    }, [obj.id, obj.syntax]); // Watch the ID and the syntax string specifically

    const handle = (newValue) => {
        setvalue(newValue);
        // Sync back to Redux so the 'Run' button can access the code
        dispatch(setApiData({ name: obj.id, value: newValue }));
    };

    return (
        <Editor
            height="100vh"
            theme="vs-dark"
            language={obj.id}      // Monaco uses this for highlighting
            value={valuee}          // Controlled component
            onChange={handle}       // Update state on type
            options={{
                fontSize: 14,
                automaticLayout: true,
            }}
        />
    );
}

export default EditorBox;