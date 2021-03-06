import { Product } from '../entities/Product';

const includesAllQueryTerms = (terms: string[], searchField: string) => {
  for (const term of terms) {
    if (!searchField.includes(term)) {
      return false;
    }
  }
  return true;
};

const processSearchQuery = (query: string, products: Product[]) => {
  const queryTerms = query.trim().toLowerCase().split(' ');

  const filteredProducts = products.filter((product) => {
    const name = product.name.toLowerCase();
    const desc = product.description.toLowerCase();
    const longDesc = product.longDescription.toLowerCase();

    return (
      includesAllQueryTerms(queryTerms, name) ||
      includesAllQueryTerms(queryTerms, desc) ||
      includesAllQueryTerms(queryTerms, longDesc)
    );
  });

  return filteredProducts;
};

export default processSearchQuery;
