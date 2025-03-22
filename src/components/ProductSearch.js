import React, { useEffect, useState } from 'react';
import useDebounce from '../hooks/useDebounce';
import useProductSearch from '../hooks/useProductSearch';

const ProductSearch = ({ setFilteredProducts }) => {
  const { products } = useProductSearch();
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  useEffect(() => {
    if (!debouncedSearchTerm) {
      setFilteredProducts(products);
      return;
    }
    
    const filtered = products.filter(product => 
      product.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [debouncedSearchTerm, products]);

  

  // Simulate product filtering when debounced value changes
  
  return (
    <input
      type="text"
      className="form-control"
      placeholder="Rechercher un produit..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default ProductSearch;
