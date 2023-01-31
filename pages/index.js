import Layout from '@common/components/Layout'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import ProductCard from '@common/components/ProductCard';

export default function HomePage({ products }) {
  const { list } = products;

  // console.log(props)
  return (
    <Layout>
      <Container maxWidth="sm">
        <Grid container spacing={2}>
          { list.map((list, id) => {
            return (
              <Grid key={id} item xs={6} sm={6}>
                <ProductCard 
                  productID={list.id}
                  img={list.img}
                  title={list.name}
                  promoLabel={list.promo}
                  price={list.price}
                  rating={list.rating}
                  sold={list.sold}
                />
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </Layout>
  )
}
const baseUrl = process.env.ENV === 'prod' ? process.env.BASE_URL_PROD : process.env.BASE_URL_DEV

export async function getStaticProps() {
  const res = await fetch(`${baseUrl}/api/products`);
  const products = await res.json();

  return {
    props: {
      products
    }
  }
}
