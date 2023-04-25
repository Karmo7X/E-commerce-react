
import { BrowserRouter , Route ,Routes } from 'react-router-dom';
import './App.css';
import Layout from './componet/Layout';
import Home from './componet/pages/Home/Home';
import About from './componet/pages/About/about';
import Ourstore from './componet/pages/Our store/Ourstore';
import Blogpage from './componet/pages/Blogpage/Blogpage';
import Contactus from './componet/pages/ContactUs/Contactus';
import Wishlist from './componet/pages/wishlist/Wishlist';
import Log from './componet/pages/Account/Log';
import Forget from './componet/pages/Account/Forget';
import Signin from './componet/pages/Account/Signin';
import Reset from './componet/pages/Account/Reset';
import Singleblog from './componet/pages/Blogpage/Singleblog';
import Privacypolicy from './componet/pages/policy/Privacypolicy';
import Shoppingpolicy from './componet/pages/policy/Shoppingpolicy';
import Refundpolicy from './componet/pages/policy/Refundpolicy';
import Temscondtion from './componet/pages/policy/Temscondtion';
import SingleProduct from './componet/pages/Our store/SingleProduct';
import Cart from './componet/pages/cart/Cart';
import Checkout from './componet/pages/cart/Checkout';
import Gaming from './componet/pages/CAtegory/Gaming';
import Beauty from './componet/pages/CAtegory/Beauty';
import ELectronic from './componet/pages/CAtegory/ELectronic';
import Sneakers from './componet/pages/CAtegory/Sneakers';
import Watch from './componet/pages/CAtegory/Watch';
import Books from './componet/pages/CAtegory/Books';

function App() {
  return (
    <>
       <BrowserRouter>
     <Routes>
      <Route path='/' element={<Layout/>}>
       <Route index element={<Home/>}/>
       <Route path='About' element={<About/>}/>
       <Route path='Contact' element={<Contactus/>}/>
       <Route path='Store' element={<Ourstore/>}/>
       <Route path='Singleproduct' element={<SingleProduct/>}/>
       <Route path='Cart' element={<Cart/>}/>
       <Route path='Gaming' element={<Gaming/>}/>
       <Route path='Beauty' element={<Beauty/>}/>
       <Route path='Elecronics' element={<ELectronic/>}/>
       <Route path='Sneakers' element={<Sneakers/>}/>
       <Route path='Watches' element={<Watch/>}/>
       <Route path='Books' element={<Books/>}/>

       <Route path='Checkout' element={<Checkout/>}/>
       <Route path='Blog' element={<Blogpage/>}/>
       <Route path='Single' element={<Singleblog/>}/>
       <Route path='wishlist' element={<Wishlist/>}/>
       <Route path='Login' element={<Log/>}/>
       <Route path='Forget-Password' element={<Forget/>}/>
       <Route path='Signin' element={<Signin/>}/>
       <Route path='Reset' element={<Reset/>}/>
       <Route path='Privacy policy' element={<Privacypolicy/>}/>
       <Route path='Shopping policy' element={<Shoppingpolicy/>}/>
       <Route path='Refund policy' element={<Refundpolicy/>}/>
       <Route path='TermsCondition' element={<Temscondtion/>}/>
      </Route>
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
