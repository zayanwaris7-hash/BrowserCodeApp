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

    useEffect(() => {
        dispatch(setApiData({ name: obj.id, value: valuee }));
    }, [valuee, obj.id, dispatch]);

    const handle = (newValue) => {
        setvalue(newValue);
    };

    return (
        <div className="w-full h-full min-h-[300px] md:min-h-[400px]">
            <Editor
                height="100%" 
                theme="vs-dark"
                language={obj.id}
                value={valuee}
                onChange={handle}
                options={{
                    fontSize: 14,
                    automaticLayout: true,
                    minimap: { enabled: false },
                    scrollBeyondLastLine: false,
                    padding: { top: 10 },
                    
                    // --- MOBILE OPTIMIZATION SETTINGS ---
                    wordWrap: "on",               // Force text to wrap to the next line
                    wrappingStrategy: "advanced", // Better wrapping calculations
                    lineNumbersMinChars: 3,       // Shrinks the left margin for line numbers
                    glyphMargin: false,           // Removes the extra left margin
                    folding: false,               // Removes code folding arrows to save space
                    lineDecorationsWidth: 0,      // Removes the gutter space between numbers and code
                    overviewRulerLanes: 0,        // Removes the vertical bar next to scrollbar
                    // ------------------------------------
                }}
            />
        </div>
    );
}

export default EditorBox;