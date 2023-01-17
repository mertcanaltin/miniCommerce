export async function fetchProducts() {
  const res = await fetch(`https://shop.samsung.com/tr/list/?format=json`)
  const data = await res.json()

  return data
}

export async function getAllProductPks() {
  const res = await fetch(`https://shop.samsung.com/tr/list/?format=json`);
  const { products } = await res.json();

  return products.map(product => {
    return {
      params: {
        pk: product.pk.toString()
      }
    }
  })
}

export async function getProductData(pk) {
  const res = await fetch(`https://shop.samsung.com/tr/list/?format=json`);
  const { products } = await res.json();
  const product = products.find(product => product.pk == pk)

  return {
    pk,
    ...product
  }
}

export async function getCategoryIDs() {
  const res = await fetch(`https://shop.samsung.com/tr/list/?format=json`);
  const { facets } = await res.json();

  return facets.map(category => {
    return category.data.choices.map(data => {
      return {
        params: {
          id: data.value.toString()
        }
      }
    })
  }).flat()
}

export async function getCategoryData(id) {
  const res = await fetch(`https://shop.samsung.com/tr/list/?format=json&category_ids=${id}`);
  const data = await res.json();

  return {
    id,
    ...data
  }
}