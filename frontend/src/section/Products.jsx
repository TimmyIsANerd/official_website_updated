import Card from '../components/Card';
import { ProductContainer, ProductWrapper } from '../styles/Product.style';
import { Data } from '../utils/Data';

const Products = () => {
  return (
    <ProductWrapper>
      <ProductContainer>
        {Data.map((res, i) => (
          <Card title={res.name} description={res.text} img={res.img} key={i} />
        ))}
      </ProductContainer>
    </ProductWrapper>
  );
};

export default Products;
