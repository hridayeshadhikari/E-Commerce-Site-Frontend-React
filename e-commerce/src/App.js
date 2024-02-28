import './App.css';
import HomePage from './Pages/HomePage';
import { Route, Routes, } from "react-router-dom";
import FAQ from './User/Component/Footer/FooterLinks/FAQ';
import Payments from './User/Component/Footer/FooterLinks/Payments';
import PrivacyPolicy from './User/Component/Footer/FooterLinks/PrivacyPolicy';
import Security from './User/Component/Footer/FooterLinks/Security';
import Sitemap from './User/Component/Footer/FooterLinks/Sitemap';
import TermsOfUse from './User/Component/Footer/FooterLinks/TermsOfUse';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/faq' element={<FAQ/>}></Route>
        <Route path='/paymentf' element={<Payments/>}></Route>
        <Route path='/privacy-policy' element={<PrivacyPolicy/>}></Route>
        <Route path='/security' element={<Security />}></Route>
        <Route path='/site-map' element={<Sitemap />}></Route>
        <Route path='/terms-of-use' element={<TermsOfUse/>}></Route>
      </Routes>


    </div>
  );
}

export default App;
