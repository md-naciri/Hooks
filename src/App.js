import React, { createContext, useState } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
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
  const [isDarkTheme, setIsDarkTheme] = useLocalStorage('theme', false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [language, setLanguage] = useLocalStorage('language', 'fr'); // Persist language

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
            <ProductSearch setFilteredProducts={setFilteredProducts} />
            <ProductList filteredProducts={filteredProducts} />
          </main>
        </div>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
