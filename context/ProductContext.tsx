import { createContext, ReactNode, useContext, useState } from 'react'

type authContextType = {
  productData: any
  handleProductData: (value: any) => void
  handleProductDataRemove: (productId: any) => void
}

const authContextDefaultValues: authContextType = {
  productData: [],
  handleProductData: (value) => {},
  handleProductDataRemove: (productId) => {},
}

const AuthContext = createContext<authContextType>(authContextDefaultValues)

export function useProduct() {
  return useContext(AuthContext)
}

type Props = {
  children: ReactNode
}

export function AuthProvider({ children }: Props) {
  const [productData, setProductData] = useState<any>([])

  const handleProductData = (galleryData: any) => {
    setProductData((oldArray: any) => [...oldArray, galleryData])
  }

  const handleProductDataRemove = (productId: any) => {
    setProductData(productData.filter((item: any) => item.Id !== productId))
  }

  const value = {
    productData,
    handleProductData,
    handleProductDataRemove,
  }
  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  )
}
