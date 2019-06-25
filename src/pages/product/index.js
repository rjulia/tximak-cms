import React, { useState } from 'react'
import { graphql } from "gatsby";
import Filter from '../../components/Filter';
import Layout from '../../components/Layout'
import ProductsRoll from '../../components/ProductsRoll'
import './products.scss';

const ProductIndexPage = ({ data }) => {

  const filters = [
    { label: "Todos", value: "all" },
    { label: "Capilar", value: "capillary" },
    { label: "Corporal", value: "bodily" },
    { label: "Facial", value: "facial" },
    { label: "otros", value: "others" }
  ]
  const [filter, setFilter] = useState('')
  const onSelectFilters = (e) => {
    setFilter(e)
  }
  return (

    <Layout headerData={data.headerData}>
      <div
        className="full-width-image-container products"
        style={{
          backgroundImage: `url('/img/icon_email.jpg')`,
        }}
      >
        <h1
          className="has-text-weight-bold is-size-1"
          style={{
            backgroundColor: '#f7931e',
            color: 'white',
            padding: '0rem 1rem',
          }}
        >
          Productos
          </h1>
      </div>
      <section className="section products__body">
        <div className="products__filter container">
          <div className="field">
            <label className="label">Filtro</label>
            <div className="control">
              <div className="select">
                <Filter filters={filters} onSelectFilters={onSelectFilters} />
              </div>
            </div>
          </div>
        </div>
        <div className="container products__contatiner">

          <ProductsRoll filter={filter} />

        </div>
      </section>
    </Layout>

  )

}

export default ProductIndexPage;

export const ProductPageQuery = graphql`
  query ProductPage {
    ...LayoutFragment
    
  }
`;
