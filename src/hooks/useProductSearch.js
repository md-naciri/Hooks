// useProductSearch.js
import { useState, useEffect, useCallback } from 'react';

const useProductSearch = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [itemsPerPage] = useState(9); // Show 9 products per page
  
  const fetchProducts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.daaif.net/products?page=${currentPage}&limit=${itemsPerPage}&delay=1000`
      );
      if (!response.ok) throw new Error('Erreur réseau');
      const data = await response.json();
      setProducts(data.products);
      setTotalPages(Math.ceil(data.total / itemsPerPage));
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }, [currentPage, itemsPerPage]);

  // Initial load and page change effect
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Pagination controls
  const nextPage = useCallback(() => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  }, [currentPage, totalPages]);

  const previousPage = useCallback(() => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  }, [currentPage]);

  return {
    products,
    loading,
    error,
    reload: fetchProducts,
    currentPage,
    totalPages,
    nextPage,
    previousPage,
    isFirstPage: currentPage === 1,
    isLastPage: currentPage === totalPages
  };
};

export default useProductSearch;