import { filterByPrice, sampleProducts } from "./productFilter";

describe('filterByPrice', () => {

  //Test case 1: call filterByPrice with sampleProducts and a price range of 100 to 400
  it('should correctly filter products within a given price range', () => {
    //Arrange
    const minPrice = 100;
    const maxPrice = 400;
    const expectedProducts = [
      { id: 4, name: 'Monitor', price: 300 },
      { id: 5, name: 'Webcam', price: 150 },
    ];

    const excludedProduct = { id: 1, name: 'Laptop', price: 1200 };
  
    //Act
    const filteredProducts = filterByPrice(sampleProducts, minPrice, maxPrice);
    console.log('Filtered products:', filteredProducts);

    //Assert

      // Verify the entire array content using .toEqual()
    expect(filteredProducts).toEqual(expectedProducts);
    console.log(expectedProducts);
      // 1. Check the length of the filtered array
    expect(filteredProducts).toHaveLength(2);

      // 2. Assert that the result contains the "Monitor" object
    //expect(filteredProducts).toEqual(monitorProduct);

      // 3. Assert that the result does NOT contain the "Laptop" object
    expect(filteredProducts).not.toContain(excludedProduct);

      // 4. Loop through the filtered results and assert each product's price
    filteredProducts.forEach(product => {
      expect(product.price).toBeGreaterThanOrEqual(100);
      expect(product.price).toBeLessThanOrEqual(400);
    });
  });


});


