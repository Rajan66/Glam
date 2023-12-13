import React from 'react'
import './Card.css'

const Card = () => {
    return (
        <div className='cards'>
            <div className='container'>
                <h2>Khai k po lekhne vanya thiyeu birse hehe</h2>
                <span className='line'></span>
                <div className='content'>
                    <div className='card'>
                        <img></img>
                        <p>Product 1 hogaya yeh toh</p>
                        <p><span>Eyeshadow</span></p>
                        <p>Money</p>
                    </div>
                    <div className='card'>
                        <img></img>
                        <p>Product 2 hogaya yeh toh</p>
                        <p><span>Primer</span></p>
                        <p>Money money</p>
                    </div>
                    <div className='card'>
                        <img></img>
                        <p>Product 3 hogaya yeh toh</p>
                        <p><span>Blush</span></p>
                        <p>Omg money</p>
                    </div>
                </div>
            </div>

        </div>
    )
        

    }

export default Card