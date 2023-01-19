
async function fetchProducts() {
  const res = await fetch(`https://shop.samsung.com/tr/list/?format=json`);
  const { products } = await res.json();

  return products;
}

async function getAllProductPks() {
  const products = await fetchProducts();

  return products.map(product => product.pk);
}

async function getProductData(pk) {
  const products = await fetchProducts();
  const product = products.find(product => product.pk == pk);

  return {
    pk,
    ...product
  }
}

async function getCategoryIDs() {
  const res = await fetch(`https://shop.samsung.com/tr/list/?format=json`);
  const { facets } = await res.json();

  return facets.flatMap(category => category.data.choices.map(data => data.value));
}

async function getCategoryData(id) {
  const res = await fetch(`https://shop.samsung.com/tr/list/?format=json&category_ids=${id}`);
  const data = await res.json();

  return {
    id,
    ...data
  }
}

async function getFilterData(params) {
  const res = await fetch(`https://shop.samsung.com/tr/list/?${params}&format=json`);
  const data = await res.json();

  return {
    id,
    ...data
  }
}

export { getFilterData, getCategoryData, getCategoryIDs, getProductData, fetchProducts, getAllProductPks }