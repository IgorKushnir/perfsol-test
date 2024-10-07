import { ProductJsonLd } from 'next-seo'

type Props = {
    title: string
}
export const Rating = ({ title }: Props) => (
    <ProductJsonLd
        type="Product"
        productName={title}
        aggregateRating={{
            bestRating: '5',
            ratingCount: '37',
            ratingValue: '4.9',
        }}
    />
)
