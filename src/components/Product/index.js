import React from 'react'

const Product = ( {product : {id, name ,image, prince}}) => {
    return (
        <div>
            <div className="box">
                <div className="image fit">
                    <img src={image} alt="" />
                </div>
                <div className="content">
                    <header className="align-center">
                        <p>maecenas sapien feugiat ex purus</p>
                        <h2>{name}</h2>
                    </header>
                    <p> {prince}</p>
                    <footer className="align-center">
                        <button className="button alt" onClick={(e) => deletePost(id)}>Delete</button>
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default Product
