import React from 'react';
import Item from '../components/Item';
import { useParams } from 'react-router-dom';

const Product = ()=>{
    const params = useParams();
    const productId = params.itemId;
    if(!productId){
        return <h2>Invalid Product ID</h2>
    }

    return (
        <div className='container'>
        <div className='row my-4'>
          <div className='col-lg-4'>
            <Item isVisible={true} title={productId + " Lorem Ipsum"}
                    subtitle={"Contrary to popular belief, Lorem Ipsum is not simply random text, it has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."}
                    price={"$ 29.99"} />
          </div>
        </div>
      </div>
    );
}

export default Product;