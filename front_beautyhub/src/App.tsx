import Header from './components/CommonComp/HeaderComp/Header'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './components/CommonComp/FooterComp/Footer'
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import { CssBaseline } from '@mui/material';

import MainPage from './pages/mainPage/mainPage'
import LoginPage from './pages/login/login'
import RegisterPage from './pages/register/register'
import ProfilePage from './pages/profile/profile'
import CategoriesPage from './pages/listing categories/categories'
import ListingPage from './pages/listing masters/ListingPage'
import SettingsPage from './pages/settings/settings'
import PrivacyPolicyPage from './pages/privacyPolicy/privacyPolicy'
import FavouritesPage from './pages/favourites/favourites'
import NotFoundPage from './pages/notFound/notFound'

const AppContent: React.FC = () => {
  return(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route>
            <Route path="main" element={<MainPage/>}/>
            <Route path="login" element={<LoginPage/>}/>
            <Route path="register" element={<RegisterPage/>}/>
            <Route path="profile" element={<ProfilePage/>}/>
            <Route path="categories" element={<CategoriesPage/>} />
            <Route path="listingmasters" element={<ListingPage/>} />
            <Route path="settings" element={<SettingsPage/>}/>
            <Route path="privacy-policy" element={<PrivacyPolicyPage/>}/>
            <Route path="favourites" element={<FavouritesPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/> 
          </Route>
        </Routes>
        <Footer/>
      </Router>
      </ThemeProvider>
  );
};

function App() {
  return (
    <div className="app">
        <AppContent/>
    </div>
  );
}

export default App
