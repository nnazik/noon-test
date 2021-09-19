import type { NextPage } from 'next'
import Head from 'next/head'
import navButtons from '../components/NavBar/NavButtonList'
import NavBar from '../components/NavBar/NavBar'
import { useAuth } from '../context/ProductContex'
import FavourProductCard from '../components/FavourProductCard'
import { Container, Row, Col } from 'react-grid-system'

const Favorites: NextPage = () => {
  const { galleryData } = useAuth()
  return (
    <>
      <Head>
        <title>MyApp | Favorites</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <Container style={{ padding: '20px' }}>
        <Row>
          {galleryData &&
            galleryData.map((product: any) => (
              <Col sm={6} key={product.Id}>
                <FavourProductCard product={product}></FavourProductCard>
              </Col>
            ))}
        </Row>
        <div>{galleryData.length == 0 && 'No Favor Available'}</div>
      </Container>
      <NavBar navButtons={navButtons} />
    </>
  )
}
export default Favorites
