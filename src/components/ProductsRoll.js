import React from 'react'

const ProductsRoll = () => {
  const array = [1, 2, 3, 4, 5, 5, 6, 7]
  return array.map((a) => {
    return (
      <div className="product__item">
        <div className="product__card">
          <div className="product__card--image">
            <img src="/img/shampoo_16.9oz.jpg" alt="" />
          </div>
          <div className="product__card--text">
            <div>
              <h4>Champu acondicinador cabello graso</h4>
              <p>Description del producto que puede tenr todas estas lineas</p>
            </div>
            <div className="product__card--button">
              <div className="product__card--price">
                <p> 55€</p>
              </div>
              <button className="btn"> + Info</button>
            </div>
          </div>
        </div>
      </div>

    )
  })


}

export default ProductsRoll
