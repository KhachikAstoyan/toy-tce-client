import { Button, Flex, Select } from '@mantine/core';
import { Editor, OnMount } from '@monaco-editor/react';
import React, { useCallback, useEffect, useRef, useState } from 'react';

const languages = [
  'javascript',
  'rust',
  'typescript',
  'go',
  'c',
  'cpp',
  'python',
] as const;
type Language = (typeof languages)[number];

export const CodeEditor: React.FC = () => {
  const [output, setOutput] = useState('');
  const [language, setLanguage] = useState<Language>(languages[0]);
  const editorRef = useRef<any>(null);

  const handleEditorDidMount: OnMount = (editor) => {
    editorRef.current = editor;
  };

  const submitHandler = useCallback(() => {
    if (editorRef.current) {
      const code = editorRef.current.getValue();

      fetch('http://localhost:8080/run', {
        method: 'POST',
        body: JSON.stringify({
          lang: language,
          code,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setOutput(data.output);
        });
    }
  }, [editorRef, language]);

  return (
    <div className="p-5">
      <div className="w-56">
        <Select
          data={[...languages]}
          label="Language:"
          value={language}
          // @ts-expect-error
          onChange={setLanguage}
          placeholder="Language:"
        />
      </div>
      <div className="grid grid-cols-2 gap-2 mt-10">
        <div>
          <Editor
            theme="vs-dark"
            height="400px"
            defaultLanguage="javascript"
            language={language}
            defaultValue={''}
            onMount={handleEditorDidMount}
          />
        </div>
        <div>
          <Flex gap={4}>
            <Button onClick={submitHandler}>Run</Button>
            <Button variant="light" onClick={() => setOutput('')}>
              Clear
            </Button>
          </Flex>
          <div>
            Output:
            <pre>{output}</pre>
          </div>
        </div>
      </div>
    </div>
  );
};
