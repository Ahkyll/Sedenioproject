import {Routes, Route} from 'react-router';
// import MainLayout from '../layout/MainLayout.jsx';
import HomePage from '../pages/HomePage.jsx';
import AboutPage from '../pages/AboutPage.jsx';
import CastPage from '../pages/CastPage.jsx';

function Router() {
  return (
    <Routes>
        {/* <Route element={<MainLayout/>} /> */}
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/cast" element={<CastPage/>} />
    </Routes>
  )
}

export default Router