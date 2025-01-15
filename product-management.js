// product-management.js

class Product {
    constructor(name, description, price, stock) {
      this.name = name;
      this.description = description;
      this.price = price;
      this.stock = stock;
    }
  
    // Method to update product details
    updateDetails(name, description, price, stock) {
      this.name = name;
      this.description = description;
      this.price = price;
      this.stock = stock;
    }
  
    // Method to display product information
    displayProduct() {
      console.log(`Product Name: ${this.name}`);
      console.log(`Description: ${this.description}`);
      console.log(`Price: $${this.price}`);
      console.log(`Stock: ${this.stock}`);
    }
  }
  
  // Example usage
  const product1 = new Product('Laptop', 'High performance laptop', 1200, 10);
  product1.displayProduct();
  
  product1.updateDetails('Gaming Laptop', 'High performance gaming laptop', 1500, 5);
  product1.displayProduct();
  