import React, { useState, useContext, useEffect } from 'react';
import { ThemeContext } from '../App';
import useProductSearch from '../hooks/useProductSearch';

const ProductSearch = ({ setFilteredProducts }) => {
  
  const [searchTerm, setSearchTerm] = useState('');
  const { isDarkTheme } = useContext(ThemeContext);
  const { products } = useProductSearch();

  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchTerm.trim() === '') {
        setFilteredProducts(products);
      } else {
        const filtered = products.filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
      }
    }, 300);

    return () => clearTimeout(handler);
  }, [searchTerm, products, setFilteredProducts]);
  // TODO: Exercice 2.1 - Utiliser le LanguageContext
  
  // TODO: Exercice 1.2 - Utiliser le hook useDebounce
  
  return (
    <div className="mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Rechercher un produit..."
        className={`form-control ${isDarkTheme ? 'bg-dark text-light' : ''}`}
      />
    </div>
  );
};

export default ProductSearch;