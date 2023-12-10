import { MantineProvider, createTheme } from '@mantine/core';
import { CodeEditor } from './Editor/CodeEditor';

function App() {
  return (
    <MantineProvider
      // @ts-expect-error
      defaultColorScheme="dark"
    >
      <CodeEditor />
    </MantineProvider>
  );
}

export default App;
