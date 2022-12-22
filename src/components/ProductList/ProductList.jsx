import styles from './ProductList.css';
import ProductListItem from '../ProductListItem/ProductListItem';

export default function ProductList({ productItems, handleAddToOrder }) {
  const items = productItems.map(item =>
    <ProductListItem
      key={item._id}
      handleAddToOrder={handleAddToOrder}
      productItem={item}
    />
  );
  return (
    <main className={styles.ProductList}>
      {items}
    </main>
  );
}