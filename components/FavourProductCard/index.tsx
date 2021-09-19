import React from 'react'
import Image from 'next/image'
import {
  FavorProductContainer,
  FavorProductRemoveIcon,
  FavorProductTextCardName,
  FavorProductTextDescriptionText,
  FavorProductTextWrapper,
} from './styles'
import { useProduct } from '../../context/ProductContext'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'

interface FavorProductCardComponentProps {
  product: any
}

const FavorProductCard = (props: FavorProductCardComponentProps) => {
  const { handleProductDataRemove } = useProduct()
  return (
    <FavorProductContainer>
      <Image
        objectFit="cover"
        loading="lazy"
        height={100}
        width={100}
        src={props.product.product_pic}
        alt="product_pic"
      />
      <FavorProductTextWrapper>
        <FavorProductTextCardName>
          {props.product.product_name}
        </FavorProductTextCardName>
        <FavorProductTextCardName>
          {props.product.product_price}
        </FavorProductTextCardName>
        <FavorProductTextDescriptionText>
          {props.product.product_description}
        </FavorProductTextDescriptionText>
      </FavorProductTextWrapper>
      <FavorProductRemoveIcon
        icon={faWindowClose}
        size="2x"
        onClick={() => handleProductDataRemove(props.product.Id)}
      />
    </FavorProductContainer>
  )
}

export default FavorProductCard
