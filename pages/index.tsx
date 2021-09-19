import type { NextPage, GetStaticProps, GetStaticPropsContext } from 'next'
import { Container, Row, Col } from 'react-grid-system'
import Head from 'next/head'
import ProductCard from '../components/ProductCard'
import navButtons from '../components/NavBar/NavButtonList'
import NavBar from '../components/NavBar/NavBar'

const Home: NextPage = (props: any) => {
  return (
    <>
      <Head>
        <title>MyApp | Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <Container>
        <Row>
          {props.products.map((product: any) => (
            <Col key={product.Id} sm={4}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>
      <NavBar navButtons={navButtons} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext,
) => {
  const res = await fetch('http://localhost:3005/api/hello')
  const products = await res.json()
  return {
    props: {
      products,
    },
  }
}

export default Home
