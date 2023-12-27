import { MantineProvider, createTheme } from '@mantine/core';
import { RouterProvider } from 'react-router-dom';
import { router } from './pages/router';

const theme = createTheme({
  colors: {},
});

function App() {
  return (
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <RouterProvider router={router} />
    </MantineProvider>
  );
}

export default App;
