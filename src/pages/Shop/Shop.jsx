import React, { useEffect, useState } from 'react'
import PageHeader from '../../components/PageHeader'
import Data from '/src/products.json'
import ProductCards from './ProductCards'
import Pagination from './Pagination'
import Search from './Search'
import ShopCategory from './ShopCategory'
import PopularPost from './PopularPost'
import Tags from './Tag'

const showResult = 'Showing 01 - 12 of 139 Results'

export default function Shop() {
  const [GridList, setGridList] = useState(true)
  const [products, setProducts] = useState(Data)

  //   category active colors
  const [selectedCategory, setSelectedCategory] = useState('All')

  // pagination
  // Get current products to display
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 12 // Number of products per page

  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  )

  // Function to change the current page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  // category based filtering
  const menuItems = [...new Set(Data.map((Val) => Val.category))]

  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat
    })
    setSelectedCategory(curcat)
    setProducts(newItem)
    // console.log(selectedCategory)
  }

  return (
    <div>
      <PageHeader title={'Our Shop Pages'} curPage={'Shop'} />

      {/* shop page */}
      <div className='shop-page padding-tb'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8 col-12'>
              <article>
                {/** layout and title here */}
                <div className='shop-title d-flex flex-wrap justify-content-between'>
                  <p>{showResult}</p>
                  <div
                    className={`product-view-mode ${
                      GridList ? 'gridActive' : 'listActive'
                    }`}
                  >
                    <a className='grid' onClick={() => setGridList(!GridList)}>
                      <i className='icofont-ghost'></i>
                    </a>
                    <a className='list' onClick={() => setGridList(!GridList)}>
                      <i className='icofont-listine-dots'></i>
                    </a>
                  </div>
                </div>
                <div>
                  {/** product cards */}
                  <ProductCards
                    products={currentProducts}
                    GridList={GridList}
                  />
                </div>
                <Pagination
                  productsPerPage={productsPerPage}
                  totalProducts={products.length}
                  paginate={paginate}
                  activePage={currentPage}
                />
              </article>
            </div>

            <div className='col-lg-4 col-12'>
              <aside>
                <Search products={products} GridList={GridList} />
                {/* shop category */}
                <ShopCategory
                  filterItem={filterItem}
                  setItem={setProducts}
                  menuItems={menuItems}
                  setProducts={setProducts}
                  selectedCategory={selectedCategory}
                />
                <PopularPost />
                <Tags />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
