import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import mockApisDefinition from '@__mocks__/apis';
import getApisDefinition from '@config/apis';

const mockApis = () => {
  const mock = new MockAdapter(axios);
  const methods = {
    get: 'onGet'
  };
  const apisDefinition = getApisDefinition();
  Object.keys(apisDefinition).forEach((domainKey) => {
    const { domain, endpoints } = apisDefinition[domainKey];
    Object.keys(endpoints).forEach((endpointKey) => {
      const { endpoint, method } = endpoints[endpointKey];
      const mockApiDefinition =
        mockApisDefinition[`${domainKey} ${method} ${endpointKey}`];
      mock[methods[method]](
        `${domain}/${endpoint}`,
        mockApiDefinition?.config
      ).reply(200, mockApiDefinition?.response);
    });
  });
};

if (process.env.NODE_ENV === 'test') {
  mockApis();
}

const apiHelper = (domain) => (endpoint) => {
  const domainConfig = getApisDefinition()[domain];
  const endpointConfig = domainConfig?.endpoints[endpoint];
  const url = `${domainConfig?.domain}/${endpointConfig?.endpoint}`;
  const getOptions = (params, config) => {
    const options = [];
    if (endpointConfig.method === 'get') {
      options.push({
        ...params,
        ...endpointConfig.config,
        ...config
      });
    } else {
      options.push(params);
      options.push({ ...endpointConfig.config, ...config });
    }
    return options;
  };
  return (params, config) =>
    axios[endpointConfig.method](url, ...getOptions(params, config));
};

const getApis = (requiredEndpoints) =>
  requiredEndpoints.reduce((apis, { domain, endpoints }) => {
    const api = apiHelper(domain);
    apis[domain] = endpoints.reduce((acc, curr) => {
      acc[curr] = api(curr);
      return acc;
    }, {});
    return apis;
  }, {});

export default getApis;
