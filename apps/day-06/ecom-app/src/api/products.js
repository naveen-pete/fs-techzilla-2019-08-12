const apiUrl = 'http://localhost:3000/api/products';

export const getProducts = async () => {
  const response = await fetch(apiUrl);
  return response.json();
};

export const addProduct = async product => {
  const response = await fetch(
    apiUrl, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(product)
    }
  );

  return response.json();
}