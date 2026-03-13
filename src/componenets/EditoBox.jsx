import React, { useEffect, useState } from 'react';
import Editor from '@monaco-editor/react';
import { useDispatch, useSelector } from 'react-redux';
import { setApiData } from '../createConext/ApiDataslice';

function EditorBox() {
    const dispatch = useDispatch();
    const obj = useSelector((state) => state.data);
    const [valuee, setvalue] = useState(obj.syntax);

    useEffect(() => {
        if (obj.syntax) {
            setvalue(obj.syntax);
        }
    }, [obj.id, obj.syntax]);

    // Moved dispatch into a useEffect to ensure it only runs when valuee changes
    // This prevents re-render loops and improves performance
    useEffect(() => {
        dispatch(setApiData({ name: obj.id, value: valuee }));
    }, [valuee, obj.id, dispatch]);

    const handle = (newValue) => {
        setvalue(newValue);
    };

    return (
        <div className="w-full h-full min-h-[300px] md:min-h-[400px]">
            <Editor
                /* Changed to 100% to fit the parent container's responsive height */
                height="100%" 
                theme="vs-dark"
                language={obj.id}
                value={valuee}
                onChange={handle}
                options={{
                    fontSize: 14,
                    automaticLayout: true,
                    minimap: { enabled: false }, // Better for mobile/small screens
                    scrollBeyondLastLine: false,
                    padding: { top: 10 },
                }}
            />
        </div>
    );
}

export default EditorBox;