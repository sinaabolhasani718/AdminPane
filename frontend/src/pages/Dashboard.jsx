import { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import ProductTable from "../components/ProductTable/ProductTable";
import AddProductModal from "../components/Modals/AddProductModal";
import EditProductModal from "../components/Modals/EditProductModal";
import DeleteProductModal from "../components/Modals/DeleteProductModal";
import styles from "./Dashboard.module.css";

import {
  fetchProducts,
  addProduct,
  editProduct,
  deleteProduct,
} from "../services/api";

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const loadProducts = async (query = "") => {
    setLoading(true);
    setErrorMessage("");
    try {
      const data = await fetchProducts(query);
      if (data.length === 0) {
        setErrorMessage("هیچ محصولی با این مشخصات پیدا نشد");
      }
      setProducts(data);
    } catch (err) {
      console.error("Error fetching products:", err.response?.data || err.message);
      setErrorMessage("مشکلی در بارگذاری محصولات پیش آمد");
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleSearch = (value) => {
    setSearch(value);
    loadProducts(value);
  };

  const handleAddProduct = async (product) => {
    try {
      const newProduct = await addProduct(product);
      setProducts((prev) => [...prev, newProduct]);
      setOpenAddModal(false);
    } catch (err) {
      console.error("Add product error:", err.response?.data || err.message);
    }
  };

  const handleOpenEdit = (product) => {
    setSelectedProduct(product);
    setOpenEditModal(true);
  };

  const handleEditProduct = async (updated) => {
    try {
      const updatedProduct = await editProduct(updated);
      setProducts((prev) =>
        prev.map((p) => (p.id === updatedProduct.id ? updatedProduct : p))
      );
      setOpenEditModal(false);
      setSelectedProduct(null);
    } catch (err) {
      console.error("Edit product error:", err.response?.data || err.message);
    }
  };

  const handleOpenDelete = (product) => {
    setSelectedProduct(product);
    setOpenDeleteModal(true);
  };

  const handleDeleteProduct = async () => {
    try {
      await deleteProduct(selectedProduct.id);
      setProducts((prev) => prev.filter((p) => p.id !== selectedProduct.id));
      setOpenDeleteModal(false);
      setSelectedProduct(null);
    } catch (err) {
      console.error("Delete product error:", err.response?.data || err.message);
    }
  };

  return (
    <>
      <Header search={search} onSearch={handleSearch} />
      <div className={styles.container}>
        <div className={styles.topBar}>
          <h2>
            <img src="/img/setting.svg" alt="" />
            مدیریت کالا
          </h2>
          <button
            className={styles.addBtn}
            onClick={() => setOpenAddModal(true)}
          >
            افزودن محصول
          </button>
        </div>

        {loading ? (
          <p>در حال بارگذاری...</p>
        ) : errorMessage ? (
          <p style={{ textAlign: "center", marginTop: "20px" }}>{errorMessage}</p>
        ) : (
          <ProductTable
            products={products}
            onEdit={handleOpenEdit}
            onDelete={handleOpenDelete}
          />
        )}

        <AddProductModal
          isOpen={openAddModal}
          onClose={() => setOpenAddModal(false)}
          onSubmit={handleAddProduct}
        />

        <EditProductModal
          isOpen={openEditModal}
          onClose={() => setOpenEditModal(false)}
          product={selectedProduct}
          onSubmit={handleEditProduct}
        />

        <DeleteProductModal
          isOpen={openDeleteModal}
          onClose={() => setOpenDeleteModal(false)}
          onConfirm={handleDeleteProduct}
        />
      </div>
    </>
  );
}

export default Dashboard;
