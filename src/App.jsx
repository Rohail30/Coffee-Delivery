import { Routes, Route } from "react-router-dom";
import MainPage from "./Components/MainPage";
import Navbar from "./Components/Navbar";
import { useState } from "react";

import Checkout from "./Components/CheckOut";

function App() {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleSelectedProduct = (productID, isAddition) => {
    let existingProductIndex = selectedProducts.findIndex(
      (product) => product.pId === productID
    );

    if (existingProductIndex !== -1) {
      if (isAddition) {
        selectedProducts[existingProductIndex].count += 1;
      } else {
        if (selectedProducts[existingProductIndex].count > 0) {
          selectedProducts[existingProductIndex].count -= 1;

          if (selectedProducts[existingProductIndex].count === 0) {
            selectedProducts.splice(existingProductIndex, 1);
          }
        }
      }
    } else {
      if (isAddition) {
        selectedProducts.push({
          pId: productID,
          count: 1,
          delivery: 3.5,
          finalise: false,
        });
      } else {
        alert("please add the item first");
      }
    }

    setSelectedProducts([...selectedProducts]);
  };

  const getProductCount = (productID) => {
    let existingProductIndex = selectedProducts.findIndex(
      (product) => product.pId === productID
    );
    if (existingProductIndex !== -1) {
      return selectedProducts[existingProductIndex].count;
    } else {
      return 0;
    }
  };

  const handleAddToCart = (productID) => {
    let existingProductIndex = selectedProducts.findIndex(
      (product) => product.pId === productID
    );
    if (existingProductIndex !== -1) {
      let existingProduct = selectedProducts[existingProductIndex];

      existingProduct.finalise = true;
      existingProduct.addedOn = new Date().toLocaleDateString();
      existingProduct.addTime = new Date().toLocaleTimeString();
      existingProduct.addedBy = "user";

      selectedProducts[existingProductIndex] = existingProduct;
    }

    setSelectedProducts([...selectedProducts]);
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar selectedProducts={selectedProducts} />
              <MainPage
                handleSelectedProduct={handleSelectedProduct}
                getProductCount={getProductCount}
                handleAddToCart={handleAddToCart}
              />
            </>
          }
        />

        <Route
          path="/checkout"
          element={
            <Checkout
              selectedProducts={selectedProducts}
              handleSelectedProduct={handleSelectedProduct}
              setSelectedProducts={setSelectedProducts}
              handleAddToCart={handleAddToCart}
              getProductCount={getProductCount}
            />
          }
        />
      </Routes>
    </>
  );
}
export default App;
