import React, { FC} from 'react';
import Image from 'next/image'
import Logo from '../../public/vercel.svg'
import {PostCardContainer} from "./styles";

const ProductCardComponent:FC<ProductCardComponentProps> = ({product}) => {
    return (
        <PostCardContainer>
            <Image src={Logo}/>
            <p>{product.name}</p>
        </PostCardContainer>
    );
}

interface ProductCardComponentProps{
    product:any;
}

export default  ProductCardComponent;