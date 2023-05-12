import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'layouts/SharedLayout';
import HomePage from 'pages/HomePage';
import { ThemeProvider } from 'styled-components';
import { theme } from 'utils/theme';
import NoticesPage from '../../pages/NoticesPage/NoticesPage';

// const HomePage = lazy(() => import('pages/HomePage'));z
// const RegisterPage = lazy(() => import('pages/RegisterPage'));
// const LoginPage = lazy(() => import('pages/LoginPage'));

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
        </Route>

        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
    </ThemeProvider>
  );
};

export default App;
