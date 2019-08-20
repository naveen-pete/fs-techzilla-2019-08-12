const apiUrl = 'http://localhost:3000/api/auth';

export const login = async credentials => {
  const response = await fetch(
    apiUrl, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(credentials)
    }
  );

  return response.json();
};
