import React, { createContext, useEffect, useState } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import useProductSearch from './hooks/useProductSearch';
import ProductSearch from './components/ProductSearch';
import ProductList from './components/ProductList';
import ThemeToggle from './components/ThemeToggle';
import { LanguageContext } from './contexts/LanguageContext';
import LanguageSelector from './components/LanguageSelector';

/*
 * Exercice 3 : Hooks Personnalisés
 * Objectif : Créer des hooks réutilisables
 * 3.1 Créer le hook useDebounce
 * 3.2 Créer le hook useLocalStorage
 * 3.3 Documenter votre solution ici
 */
export const ThemeContext = createContext();

const App = () => {
  // Theme and language state management
  const [isDarkTheme, setIsDarkTheme] = useLocalStorage('theme', false);
  const [language, setLanguage] = useLocalStorage('language', 'fr');

  // Product search and pagination state
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

  const [filteredProducts, setFilteredProducts] = useState(products);

  // Update filtered products when products change
  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <div className={`container ${isDarkTheme ? 'bg-dark text-light' : 'bg-light'}`}>
          <header className="my-4">
            <h1 className="text-center">
              {language === 'fr' ? 'Catalogue de Produits' : 'Product Catalog'}
            </h1>
            <div className="d-flex justify-content-end gap-2">
              <ThemeToggle />
              <LanguageSelector />
            </div>
          </header>
          <main>
            <ProductSearch 
              setFilteredProducts={setFilteredProducts} 
              products={products}
            />
            <ProductList 
              filteredProducts={filteredProducts}
              loading={loading}
              error={error}
              reload={reload}
              currentPage={currentPage}
              totalPages={totalPages}
              nextPage={nextPage}
              previousPage={previousPage}
              isFirstPage={isFirstPage}
              isLastPage={isLastPage}
            />
          </main>
        </div>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;