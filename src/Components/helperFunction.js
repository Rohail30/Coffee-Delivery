export const finalizedObjectsCount = (selectedProducts) => {
  const addedItemsCount = selectedProducts.filter(
    (item) => item.finalise
  ).length;

  return addedItemsCount;
};

export const finalisedItems = (selectedProducts) => {
  const finalizedObjects = selectedProducts.filter((item) => item.finalise);
  return finalizedObjects;
};

export const finalisedItemsTotalPrice = (selectedProducts, Coffees) => {
  const finalizedObjects = selectedProducts
    .map((product) => {
      if (product.finalise) {
        const coffee = Coffees.find(
          (coffee) => coffee.id === product.pId && product.finalise === true
        );

        if (coffee) {
          return {
            count: product.count,
            amount: coffee.amount,
          };
        }
      }

      return null;
    })
    .filter(Boolean);

  const total = finalizedObjects.reduce((currentTotal, item) => {
    return item.amount * item.count + currentTotal;
  }, 0);

  return total;
};

export const totalAmount = (total, delivery) => {
  if (total === 0) {
    return 0;
  }
  return Math.round(total + delivery);
};

export const removeItem = (selectedProducts, pId, setSelectedProducts) => {
  const updatedSelectedProducts = selectedProducts.filter(
    (item) => item.pId !== pId
  );
  setSelectedProducts(updatedSelectedProducts);
};
