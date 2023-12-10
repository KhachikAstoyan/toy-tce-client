import { MantineProvider, createTheme } from '@mantine/core';
import { CodeEditor } from './Editor/CodeEditor';

function App() {
  return (
    <MantineProvider>
      <CodeEditor />
    </MantineProvider>
  );
}

export default App;
