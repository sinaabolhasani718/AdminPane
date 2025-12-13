import styles from "../Modals/DeleteProductModal.module.css";

function DeleteProductModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <img src="/img/Close.svg" alt="" />
        <h3>آیا از حذف این محصول مطمئن هستید؟</h3>

        <div className={styles.buttons}>
          <button className={styles.cancel} onClick={onClose}>
            انصراف
          </button>
          <button className={styles.delete} onClick={onConfirm}>
            حذف
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteProductModal;
