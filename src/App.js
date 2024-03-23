// import logo from './logo.svg';
import './App.css';
import Nav from './components/MyNav'
import {Route, Routes} from 'react-router-dom';
import Help from './pages/Help';
import ContactUs from './pages/ContactUs';
import Products from './pages/Products';
import NotFound from './pages/NotFound';
import Signup from './pages/Signup';
import Todo from './pages/Todo';

function App() {
  return (
    <div className="App">
       <Nav />
    {/* this is a sample change1 */}
      <Routes>
        <Route path='/' element={<ContactUs />} />
        <Route path='signup' element={<Signup />} />
        <Route path='todo' element={<Todo />} />

        <Route path='alma'>
          <Route path='help' element={<Help />} />
          <Route path='contact' element={<ContactUs />} />
        </Route>
       
        <Route path='products' element={<Products />} />
        <Route path='products/:itemId' element={<Products />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </div>
  );
}

export default App;
