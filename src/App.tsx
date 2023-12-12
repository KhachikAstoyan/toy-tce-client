import { MantineProvider, createTheme } from '@mantine/core';
import { CodeEditor } from './Editor/CodeEditor';

const theme = createTheme({
  colors: {},
});

function App() {
  return (
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <CodeEditor />
    </MantineProvider>
  );
}

export default App;
