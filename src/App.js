import './App.css';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent';
import HomePage from './screens/HomePage';
import FooterComponent from './components/FooterComponent';
import ProductPage from './screens/ProductPage';
import GenericNotFound from './components/GenericNotFound';
import AddScreen from './screens/AddScreen';
import DeleteScreen from './screens/DeleteScreen';
import LoginScreen from './screens/LoginScreen';

function App() {
  return (
    <Router>
    <HeaderComponent/>
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/product/:id" element={<ProductPage/>}/>
    <Route path="/product/add" element={<AddScreen/>}/>
    <Route path="/product/delete" element={<DeleteScreen/>}/>
    <Route path="login" element={<LoginScreen/>}/>
    <Route path="*" element={<GenericNotFound/>} />
    </Routes>
    <FooterComponent/>
    </Router>
  );
}

export default App;
