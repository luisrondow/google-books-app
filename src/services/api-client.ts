export default function client(endpoint: string, customConfig = {}) {
  const config = {
    method: "GET",
    ...customConfig,
  };

  return fetch(`https://www.googleapis.com/books/v1/${endpoint}`, config).then(
    async (response) => {
      const data = await response.json();

      if (response.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    }
  );
}
