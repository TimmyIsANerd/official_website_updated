import Card from '../components/Card';
import { ProductContainer, ProductWrapper } from '../styles/Product.style';

const Products = () => {
  return (
    <ProductWrapper>
      <ProductContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ProductContainer>
    </ProductWrapper>
  );
};

export default Products;
