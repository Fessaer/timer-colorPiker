import { EnvironmentConfiguration, environments } from './index';

const getDevEnvironmentConfiguration = (): EnvironmentConfiguration => {
  return {
    ENVIRONMENT_NAME: environments.dev,
    PUBLIC_URL: 'http://localhost:3000/',
    REST_API_URL: 'http://localhost:5000/api/v1/',
    GRAPHQL_API_URL: 'http://localhost:4000/',
  };
};

export default getDevEnvironmentConfiguration;
