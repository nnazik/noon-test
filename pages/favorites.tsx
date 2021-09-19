import type { NextPage } from 'next'
import Head from 'next/head'
import navButtons from '../components/NavBar/NavButtonList'
import NavBar from '../components/NavBar/NavBar'
import { useProduct } from '../context/ProductContext'
import FavourProductCard from '../components/FavourProductCard'
import { Container, Row, Col } from 'react-grid-system'
import { FavorProductContainer } from '../components/FavourProductCard/styles'

const Favorites: NextPage = () => {
  const { productData } = useProduct()
  return (
    <>
      <Head>
        <title>MyApp | Favorites</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <Container style={{ padding: '20px' }}>
        <Row>
          {productData &&
            productData.map((product: any) => (
              <Col sm={6} key={product.Id}>
                <FavourProductCard product={product}></FavourProductCard>
              </Col>
            ))}
        </Row>
        {productData.length == 0 && (
          <FavorProductContainer
            style={{ fontSize: '20px', fontWeight: 'bold' }}
          >
            No ❤️ Favorites Available
          </FavorProductContainer>
        )}
      </Container>
      <NavBar navButtons={navButtons} />
    </>
  )
}

export default Favorites
