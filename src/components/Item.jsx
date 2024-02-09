import Card from 'react-bootstrap/Card';
import Sample from './Sample';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

function Item(props) {
  const dispatcher = useDispatch();  
  if(!props.isVisible){
        return <></>
    }

    const addToCart = ()=>{
        dispatcher({
          type: 'ADD_TO_CART', 
          payload: {name: props.title, price: props.price}
        });
    }
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>
            <Sample name={props.title} />
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.subtitle}</Card.Subtitle>
        <Card.Text className='text-left'>
          {props.desc}
        </Card.Text>
        <Card.Link href="#">{props.price}</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
        <Button onClick={addToCart} variant="primary">Add to Cart</Button> 
      </Card.Body>
    </Card>
  );
}

export default Item;