import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React, {useContext} from 'react';
import { MyContext } from '../context/MyContext';

const MyNav = ()=>{
  const reduxData = useSelector(state=>state);
  const { value, updateValue } = useContext(MyContext);
  // const [cart, setCart] = React.useState([]);
  // React.useEffect(()=>{
  //   if(reduxData.cart){
  //     setCart(reduxData.cart.length);
  //   }
  // }, [reduxData]);
    return (
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
                <Link to={'/'}>Home</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to={'/products/12'}>Product</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to={'alma/contact'}>Contact</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to={'alma/help'}>Help</Link>
            </Nav.Link>
            <Nav.Link>
                <Link>Cart({reduxData.cart.length}) | {value}</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
}

export default MyNav;