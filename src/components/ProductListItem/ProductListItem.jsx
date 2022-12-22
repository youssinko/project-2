import styles from './ProductListItem.css';

export default function ProductListItem({ productItem, handleAddToOrder }) {
  return (
    <div className={styles.productListItem}>
      {/* <div className={styles.img + ' ' + 'flex-ctr-ctr'}>{productItem.img}</div> */}
      <div className={styles.name}>{productItem.name}</div>
      <div className={styles.buy}>
        <span>${productItem.price.toFixed(2)}</span>
        <button className="btn-sm" onClick={() => handleAddToOrder(productItem._id)}>
          ADD
        </button>
      </div>
    </div>
  );
}