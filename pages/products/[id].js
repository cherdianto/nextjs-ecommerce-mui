import Layout from "@common/components/Layout"
import Container from "@material-ui/core/Container"
import ProductDetailCard from "@mobile/components/ProductDetailCard"

const ProductDetail = ({ product }) => {
    const {
        name,
        img,
        price,
        rating,
        sold,
        description,
        quantity,
        condition,
        weight,
        promo
    } = product
    
    return (
        <>
            <Layout>
                <Container maxWidth="sm">
                    <ProductDetailCard 
                        img={img}
                        title={name}
                        price={price}
                        rating={rating}
                        sold={sold}
                        description={description}
                        quantity={quantity}
                        condition={condition}
                        weight={weight}
                        promo={promo}
                    />
                </Container>
            </Layout>
        </>
    )
}

const baseUrl = process.env.ENV === 'prod' ? process.env.BASE_URL_PROD : process.env.BASE_URL_DEV
export async function getStaticPaths() {
    const res = await fetch(`${baseUrl}/api/products`)
    const products = await res.json()

    const paths = products.list.map(prod => `/products/${prod.id}`)
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const res = await fetch(`${baseUrl}/api/product/${params.id}`)
    const product = await res.json()

    return {
        props: {
            product
        }
    }
}

export default ProductDetail