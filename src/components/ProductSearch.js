// ProductSearch.js
import React, { useEffect, useState, useContext } from 'react';
import useDebounce from '../hooks/useDebounce';
import useProductSearch from '../hooks/useProductSearch';
import { LanguageContext } from '../contexts/LanguageContext';

const ProductSearch = ({ setFilteredProducts }) => {
  const { 
    products, 
    loading, 
    error, 
    reload,
    currentPage,
    totalPages,
    nextPage,
    previousPage,
    isFirstPage,
    isLastPage 
  } = useProductSearch();

  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const { language } = useContext(LanguageContext);

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
  }, [debouncedSearchTerm, products, setFilteredProducts]);

  return (
    <div className="mb-4">
      <input
        type="text"
        className="form-control"
        placeholder={language === 'fr' ? 'Rechercher un produit...' : 'Search products...'}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {loading && 
        <div className="mt-2 text-center text-muted">
          {language === 'fr' ? 'Chargement...' : 'Loading...'}
        </div>
      }
    </div>
  );
};

export default ProductSearch;