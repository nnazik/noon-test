import { createContext, ReactNode, useContext, useState } from 'react'

type authContextType = {
  galleryData: any
  handleGalleryData: (value: any) => void
  handleGalleryRemove: (productId: any) => void
}

const authContextDefaultValues: authContextType = {
  galleryData: [],
  handleGalleryData: (value) => {},
  handleGalleryRemove: (productId) => {},
}

const AuthContext = createContext<authContextType>(authContextDefaultValues)

export function useAuth() {
  return useContext(AuthContext)
}

type Props = {
  children: ReactNode
}

export function AuthProvider({ children }: Props) {
  const [galleryData, setGalleryData] = useState<any>([])

  const handleGalleryData = (galleryData: any) => {
    setGalleryData((oldArray: any) => [...oldArray, galleryData])
  }

  const handleGalleryRemove = (productId: any) => {
    setGalleryData(galleryData.filter((item: any) => item.Id !== productId))
  }

  const value = {
    galleryData,
    handleGalleryData,
    handleGalleryRemove,
  }
  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  )
}
