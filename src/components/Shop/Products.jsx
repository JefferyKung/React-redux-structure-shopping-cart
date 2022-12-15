import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: 'Better Call Sual DVD',
    description: "Better Call Saul is an American crime and legal drama television series created by Vince Gilligan and Peter Gould. Part of the Breaking Bad franchise, it is a spin-off of Gilligan's previous series, Breaking Bad, and serves as a prequel and sequel to its predecessor.",
  },
  {
    id: 'p2',
    price: 5,
    title: 'Breaking Bad DVD',
    description: "Created by Vince Gilligan, the series follows the exploits of Walter White, a modest high school chemistry teacher, who discovers a new purpose in life when he learns he has terminal cancer and turns to a life of crime to provide for his family.",
  },
  {
    id: 'p3',
    price: 7,
    title: 'Game of Thrones DVD',
    description: " Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia. In the mythical continent of Westeros, several powerful families fight for control of the Seven Kingdoms.",
  }
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
