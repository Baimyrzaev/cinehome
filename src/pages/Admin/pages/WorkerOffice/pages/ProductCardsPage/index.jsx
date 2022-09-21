import React from 'react'
import cls from './ProductCardsPage.module.scss'
import { AddProductModal } from 'pages/Admin/components/AddProductModal'
import { ProductCards, ProductCardsSkeleton } from 'pages/Admin/components/ProductCards'

const ProductCardsPageSkeleton = () => {
  return (
    <div className={cls.productCardsPageSkeleton}>
      <div></div>
      <div>
        <ProductCardsSkeleton />
      </div>
    </div>
  )
}

export const ProductCardsPage = ({
  products,
  worker,
  isLoadingProducts,
  isLoadingPostProduct,
  isLoadingEditProduct,
  deleteProduct,
  postProduct,
  editProduct,
}) => {
  const [isActiveAddProductModal, setIsActiveAddProductModal] = React.useState(false)

  if (isLoadingProducts || !worker) return <ProductCardsPageSkeleton />

  if (!products.length) return

  return (
    <>
      <div className={cls.root}>
        <h1>Продукты</h1>
        <div>
          {
            products?.map(product => (
              <ProductCards
                key={product.key}
                product={product}
                isLoadingEditProduct={isLoadingEditProduct}
                deleteProduct={deleteProduct}
                editProduct={editProduct}
              />
            ))
          }
        </div>
        <button
          className={cls.addProductBtn}
          onClick={() => setIsActiveAddProductModal(true)}
        >Добавить продукт</button>
      </div>
      {
        isActiveAddProductModal &&
        <AddProductModal
          isActive={isActiveAddProductModal}
          setIsActive={setIsActiveAddProductModal}
          postProduct={postProduct}
          isLoading={isLoadingPostProduct}
        />
      }
    </>
  )
}
