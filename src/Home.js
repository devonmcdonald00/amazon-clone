import React from 'react';
import Product from './Product'
import './Home.css'

function Home(){
    return(
        <div className="home">
            <div className="home_container">
                <img
                    className = "home_img"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/Yzk3OWQ3NDUt/Yzk3OWQ3NDUt-ZWY0YzBhZjAt-w1500._CB418661556_.jpg"
                    alt=""
                />
                <div className="home_row">
                    <Product title="The Lean Startup" 
                        id = "12345678"
                        price={29.99} 
                        image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg" 
                        rating={5}
                    />
                    <Product/>
                </div>
                <div className="home_row">
                    <Product/>
                    <Product/>
                    <Product/>
                </div>
                <div className="home_row">
                    <Product/>
                </div>
            </div>
        </div>
    )
}

export default Home;