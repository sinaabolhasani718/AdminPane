import styles from "./ProductTable.module.css";

function ProductTable({ products, onEdit, onDelete }) {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>نام کالا</th>
            <th>موجودی</th>
            <th>قیمت</th>
            <th>شناسه</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td>{item.name || "بدون نام"}</td>
              <td>{item.quantity ?? 0}</td>
              <td>{item.price ?? 0} تومان</td>
              <td>{item.id}</td>
              <td className={styles.iconImg}>
                <img src="/img/edit.svg" alt="edit" onClick={() => onEdit(item)} />
                <img src="/img/trash.svg" alt="delete" onClick={() => onDelete(item)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
