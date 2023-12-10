import {
  Button,
  Code,
  Divider,
  Flex,
  Group,
  LoadingOverlay,
  NumberInput,
  Select,
  Title,
} from '@mantine/core';
import { Editor, OnMount } from '@monaco-editor/react';
import React, { useCallback, useRef, useState } from 'react';
import { languages, Language } from './contants';

export const CodeEditor: React.FC = () => {
  const [output, setOutput] = useState('');
  const [language, setLanguage] = useState<Language>(languages[0]);
  const [loading, setLoading] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const editorRef = useRef<any>(null);

  const handleEditorDidMount: OnMount = (editor) => {
    editorRef.current = editor;
  };

  const submitHandler = useCallback(() => {
    setLoading(true);
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
        })
        .finally(() => setLoading(false));
    }
  }, [editorRef, language]);

  return (
    <div className="h-screen">
      <div className="grid grid-cols-2 gap-2">
        <Editor
          theme="vs-dark"
          height="100vh"
          defaultLanguage="javascript"
          language={language}
          options={{
            fontSize,
            scrollBeyondLastLine: false,
            minimap: { enabled: false },
          }}
          defaultValue={''}
          onMount={handleEditorDidMount}
        />
        <div className="flex flex-col p-10 bg-zinc-900 relative max-h-screen">
          <Group mb={10}>
            <Select
              data={[...languages]}
              label="Language:"
              value={language}
              // @ts-expect-error
              onChange={setLanguage}
              render
              searchable
              checkIconPosition='right'
              placeholder="Language:"
            />
            <NumberInput
              defaultValue={16}
              placeholder="Font size"
              label="Font size"
              value={fontSize}
              onChange={(v) => setFontSize(Number(v))}
            />
          </Group>
          <Flex gap={4}>
            <Button color="green" onClick={submitHandler}>
              Run
            </Button>
            <Button variant="light" onClick={() => setOutput('')}>
              Clear
            </Button>
          </Flex>
          <Divider className="my-10" />
          <div className="max-h-full overflow-y-hidden">
            <LoadingOverlay visible={loading} overlayProps={{ blur: 2 }} />
            <Title order={3}>Output</Title>
            <Code className="max-h-full overflow-y-scroll" block>
              {output}
            </Code>
          </div>
        </div>
      </div>
    </div>
  );
};
