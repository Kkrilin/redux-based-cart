import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const productItems = [
  {
    id: "p1",
    title: "Test1",
    price: 6,
    description: "This is a first product - amazing!",
  },
  {
    id: "p2",
    title: "Test2",
    price: 12,
    description: "This is a second product - amazing!",
  },
  {
    id: "p3",
    title: "Test3",
    price: 14,
    description: "This is a third product - amazing!",
  },
  {
    id: "p4",
    title: "Test4",
    price: 10,
    description: "This is a fourth product - amazing!",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {productItems.map((prodItem) => (
          <ProductItem
            id={prodItem.id}
            key={prodItem.id}
            title={prodItem.title}
            price={prodItem.price}
            description={prodItem.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
