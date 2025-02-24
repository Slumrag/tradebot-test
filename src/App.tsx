import { CssBaseline, ThemeProvider } from '@mui/material';
import Layout from '@/components/Layout';
import { themeOptions } from './config/themeOptions';

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={themeOptions}>
        <Layout></Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
