"use client";

import { useState, useCallback } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import axios from "axios";
import debounce from "lodash.debounce";

interface TextEditorProps {
  docId: string;
}

const TextEditor = ({ docId }: TextEditorProps) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (editorState: EditorState) => {
    setEditorState(editorState);

    const rawEditorState = convertToRaw(editorState.getCurrentContent())

    debouncedUpdateDoc(rawEditorState);
  };

  const debouncedUpdateDoc = useCallback(
    debounce((content) => {
      axios.put(`/api/docs/${docId}`, {
        text: content,
      });
    }, 1000),
    []
  );

  return (
    <div className="bg-[#F8FBFD] min-h-screen pb-16">
      <Editor
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        toolbarClassName="flex !justify-center sticky top-0 z-50 mx-auto"
        editorClassName="mt-6 p-10 bg-white shadow-lg max-w-4xl mx-auto mb-12 border min-h-screen"
      />
    </div>
  );
};

export default TextEditor;
