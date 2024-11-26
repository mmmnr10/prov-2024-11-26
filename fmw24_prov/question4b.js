// 4b: Uppdatera egenskaper med Spread Operator (2p)
// Skriv en funktion updatePriceWithDiscount som tar emot två parametrar:
// ett produktobjekt och en rabattprocent. Funktionen ska returnera ett nytt objekt
// där priset är uppdaterat med den givna rabattprocenten

const product2 = {
  name: "Laptop",
  price: 15000,
  brand: "TechBrand",
};

function updatePriceWithDiscount(product, discount) {
  const product2 = {
    name: "Laptop",
    price: 15000,
    brand: "TechBrand",
  };
  
  function updatePriceWithDiscount(product, discount) {
  
    const discountedPrice = (product.price * (100 - discount)) / 100;
  
    
    return { 
      ...product,        
      price: discountedPrice  
    };
  }
  
  console.log(updatePriceWithDiscount(product2, 10));
  
  
  module.exports = updatePriceWithDiscount;
  
}




