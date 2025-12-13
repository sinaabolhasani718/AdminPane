import { useState, useEffect } from "react";
import styles from "../Modals/EditProductModal.module.css";

function EditProductModal({ isOpen, onClose, product, onSubmit }) {
  const [title, setTitle] = useState("");
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (product) {
      setTitle(product.name);
      setStock(product.quantity);
      setPrice(product.price);
    }
  }, [product]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !stock || !price) return alert("لطفاً همه فیلدها را پر کنید");

    const updatedProduct = {
      id: product.id,
      name: title,
      quantity: Number(stock),
      price: Number(price),
    };
    onSubmit(updatedProduct);
  };

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <h2>ویرایش محصول</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label>نام کالا</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label>تعداد موجودی</label>
          <input
            type="number"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />

          <label>قیمت</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <div className={styles.buttons}>
            <button type="button" className={styles.cancel} onClick={onClose}>
              انصراف
            </button>
            <button type="submit" className={styles.submit}>
              ذخیره تغییرات
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProductModal;
