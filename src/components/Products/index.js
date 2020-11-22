import React from 'react'
import Product from '../Product'

const Products = ({products ,deleteProduct}) => {
    return (
        <div>
            <section >
                <div>
                    <div>
                        {products.map((product,index) =>(
                            <Product key ={index} product = {product} deleteProduct ={deleteProduct} />    
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Product
