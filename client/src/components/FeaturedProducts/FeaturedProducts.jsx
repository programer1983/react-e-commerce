import React from 'react'
import "./FeaturedProducts.scss"
import Card from '../Card/Card'

const FeaturedProducts = ({type}) => {

 const data = [
    {
        id: 1,
        img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&tinysrgb&w=1600",
        img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&tinysrgb&w=1600",
        title: "Long Sleeve Graphic T-shirt",
        isNew: true,
        oldPrice: 19,
        price: 12,
    },
    {
        id: 2,
        img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&tinysrgb&w=1600",
        title: "Coat",
        isNew: true,
        oldPrice: 19,
        price: 12,
    },
    {
        id: 3,
        img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&tinysrgb&w=1600",
        title: "Skrit",
        oldPrice: 19,
        price: 12,
    },
    {
        id: 4,
        img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&tinysrgb&w=1600",
        title: "Hat",
        oldPrice: 19,
        price: 12,
    },
 ]
  return (
    <div className='featuredProducts'>
        <div className="top">
            <h1>{type} products</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis commodo ornare. Etiam in odio urna. Aenean commodo venenatis ligula, vel vulputate dolor sagittis vel. Aenean maximus dui quis pharetra tincidunt. Duis imperdiet ante vel mauris ultrices, a dapibus diam condimentum
            </p>
        </div>
        <div className="bottom">
            {data.map(item => (
                <Card key={item.id} item={item}/>
            ))}
        </div>
    </div>
  )
}

export default FeaturedProducts
