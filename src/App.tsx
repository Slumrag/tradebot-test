import { CssBaseline, ThemeProvider } from '@mui/material';
import Layout from '@/components/Layout';
import { themeOptions } from './config/themeOptions';
import Balance from './components/Balance';

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={themeOptions}>
        <Layout>
          <Balance capital={1.00865} balance={10850} onHold={24000}></Balance>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
