import React from 'react'
import {
  ProductCardContainer,
  ProductCardImage,
  ProductCardImagePriceText,
  ProductCardImageNameText,
  ProductCardImageWrapper,
  ProductCardTextContainer,
  ProductCardTagWrapper,
  ProductCardDescriptionText,
  ProductCardProfileImageContainer,
  ProductProfileImage,
  ProductCardFavorWrapper,
  ProductCardImageFavorIcon,
  ProductCardCommentText,
} from './styles'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as rHear } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAuth } from '../../context/ProductContex'

interface ProductCardComponentProps {
  product: any
}

const ProductCardComponent = (props: ProductCardComponentProps) => {
  const { handleGalleryData } = useAuth()

  return (
    <ProductCardContainer>
      <ProductCardProfileImageContainer>
        <ProductProfileImage
          loading="lazy"
          objectFit="cover"
          width={40}
          height={40}
          src={props.product.profile_pic}
          alt="profile_pic"
        />
        <ProductCardTagWrapper
          style={{ fontWeight: 'bold', marginLeft: '5px' }}
        >
          {props.product.profile_name}
        </ProductCardTagWrapper>
      </ProductCardProfileImageContainer>
      <ProductCardImageWrapper>
        <ProductCardImage
          loading="lazy"
          height={500}
          width={1700}
          src={props.product.product_pic}
          objectFit="cover"
          layout="fill"
          alt="product_pic"
        />
        <ProductCardImageNameText>
          {props.product.product_name}
        </ProductCardImageNameText>
        <ProductCardImagePriceText>
          {props.product.product_price}
        </ProductCardImagePriceText>
        <ProductCardImageFavorIcon
          onClick={() => {
            handleGalleryData(props.product)
          }}
          size="lg"
          icon={rHear}
        />
      </ProductCardImageWrapper>
      <ProductCardTextContainer>
        <ProductCardFavorWrapper>
          <FontAwesomeIcon
            color="#4E5CCC"
            style={{ marginRight: '4px' }}
            icon={faHeart}
          />
          <div>{`32 likes`}</div>
        </ProductCardFavorWrapper>
        <ProductCardDescriptionText>
          {props.product.product_description}
        </ProductCardDescriptionText>
        <ProductCardTagWrapper>
          {props.product.product_tags.map((tag: string) => (
            <div key={tag}>{`#${tag}`}</div>
          ))}
        </ProductCardTagWrapper>
        <ProductCardCommentText>View 12 comments</ProductCardCommentText>
      </ProductCardTextContainer>
    </ProductCardContainer>
  )
}

export default ProductCardComponent
