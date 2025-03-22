// ProductList.js
import React, { useContext } from 'react';
import { ThemeContext } from '../App';
import { LanguageContext } from '../contexts/LanguageContext';

const ProductList = ({ filteredProducts, loading, error, reload, currentPage, totalPages, nextPage, previousPage, isFirstPage, isLastPage }) => {
  const { isDarkTheme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  const translations = {
    noProducts: language === 'fr' ? 'Aucun produit trouvé.' : 'No products found.',
    price: language === 'fr' ? 'Prix: ' : 'Price: ',
    reload: language === 'fr' ? 'Recharger' : 'Reload',
    previous: language === 'fr' ? 'Précédent' : 'Previous',
    next: language === 'fr' ? 'Suivant' : 'Next',
    page: language === 'fr' ? 'Page' : 'Page',
    of: language === 'fr' ? 'sur' : 'of',
    error: language === 'fr' ? 'Une erreur est survenue' : 'An error occurred',
    loading: language === 'fr' ? 'Chargement...' : 'Loading...'
  };

  if (loading) {
    return <p className="text-center">{translations.loading}</p>;
  }

  if (error) {
    return (
      <div className="text-center">
        <p className="text-danger">{translations.error}: {error}</p>
        <button className="btn btn-primary" onClick={reload}>
          {translations.reload}
        </button>
      </div>
    );
  }

  if (!filteredProducts.length) {
    return <p className="text-center">{translations.noProducts}</p>;
  }

  return (
    <div>
      <div className="d-flex justify-content-end mb-3">
        <button 
          className="btn btn-outline-primary" 
          onClick={reload}
          title={translations.reload}
        >
          '-'
        </button>
      </div>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {filteredProducts.map(product => (
          <div key={product.id} className="col">
            <div className={`card h-100 ${isDarkTheme ? 'bg-dark text-light' : ''}`}>
              {product.thumbnail && (
                <img
                  src={product.thumbnail}
                  className="card-img-top"
                  alt={product.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
              )}
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">
                  <strong>{translations.price}</strong>
                  {product.price}€
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <nav className="mt-4">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${isFirstPage ? 'disabled' : ''}`}>
            <button 
              className="page-link" 
              onClick={previousPage} 
              disabled={isFirstPage}
            >
              {translations.previous}
            </button>
          </li>
          <li className="page-item">
            <span className="page-link">
              {translations.page} {currentPage} {translations.of} {totalPages}
            </span>
          </li>
          <li className={`page-item ${isLastPage ? 'disabled' : ''}`}>
            <button 
              className="page-link" 
              onClick={nextPage} 
              disabled={isLastPage}
            >
              {translations.next}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ProductList;