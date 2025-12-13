import { useState } from "react";
import styles from "../Modals/AddProductModal.module.css";

function AddProductModal({ isOpen, onClose, onSubmit }) {
  const [title, setTitle] = useState("");
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!title || !stock || !price) return alert("لطفاً همه فیلدها را پر کنید");
    const product = {
      name: title,
      quantity: Number(stock),
      price: Number(price),
    };
    console.log(product)
    onSubmit(product);
    setTitle("");
    setStock("");
    setPrice("");
  };

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <h2>ایجاد محصول جدید</h2>

        <div className={styles.fieldGroup}>
          <label>نام کالا</label>
          <input
            type="text"
            placeholder="نام کالا"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className={styles.fieldGroup}>
          <label>تعداد موجودی</label>
          <input
            type="number"
            placeholder="تعداد"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
        </div>

        <div className={styles.fieldGroup}>
          <label>قیمت</label>
          <input
            type="number"
            placeholder="قیمت"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className={styles.actions}>
          <button className={styles.cancelBtn} onClick={onClose}>
            انصراف
          </button>
          <button className={styles.submitBtn} onClick={handleSubmit}>
            ایجاد
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddProductModal;
