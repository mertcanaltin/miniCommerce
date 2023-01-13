export async function fetchProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/getProducts`)
  const data = await res.json()

  return data
}

export async function getAllProductPks() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/getProducts`);
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
  const res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/getProducts`);
  const { products } = await res.json();
  const product = products.find(product => product.pk == pk)

  return {
    pk,
    ...product
  }
}