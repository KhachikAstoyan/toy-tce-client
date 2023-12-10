import { MantineProvider } from '@mantine/core';
import { CodeEditor } from './Editor/CodeEditor';

function App() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <CodeEditor />
    </MantineProvider>
  );
}

export default App;
