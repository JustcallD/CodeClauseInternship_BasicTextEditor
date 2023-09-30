import React, { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";
import DOMPurify from "dompurify";
import "./TextEditor.css"; 

const TextEditor = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const handleEditorChange = (newContent) => {
    const sanitizedContent = DOMPurify.sanitize(newContent);
    setContent(sanitizedContent);
  };
  const config = useMemo(
    () => ({
      readonly: false,
    }),
    []
  );

  return (
    <div className="TextEditor">
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        tabIndex={1}
        onChange={(newContent) => handleEditorChange(newContent)}
        className="EditorClass" 
      />
      <div className="DisplayedContent">
        <h2>Displayed Content:</h2>
        <div
          className="ContentClass" 
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
};

export default TextEditor;
