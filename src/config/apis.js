const getApisDefinition = () => ({
  backend: {
    domain: 'https://la-manicurista-backend-cnbbj7zyp.vercel.app',
    endpoints: {
      getTracks: {
        endpoint: 'tracks',
        method: 'get',
        config: {}
      }
    }
  }
});

export default getApisDefinition;
