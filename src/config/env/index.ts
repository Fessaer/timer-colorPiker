import getProdEnvironmentConfiguration from './prod';
import getDevEnvironmentConfiguration from './dev';

export interface EnvironmentCode {
  code: string;
}

export interface EnvironmentList {
  prod: EnvironmentCode;
  dev: EnvironmentCode;
}

export const environments: EnvironmentList = {
  prod: { code: 'prod' },
  dev: { code: 'dev' },
};

export interface EnvironmentConfiguration {
  ENVIRONMENT_NAME: EnvironmentCode;
  PUBLIC_URL: string;
  REST_API_URL: string;
  GRAPHQL_API_URL: string;
}

export default function Env(): EnvironmentConfiguration {
  const hostname = window && window.location && window.location.hostname;
  let environmentConfiguration: EnvironmentConfiguration;

  if (hostname.startsWith('localhost')) {
    //TODO: Change to prod environment url
    environmentConfiguration = getProdEnvironmentConfiguration();
  } else {
    environmentConfiguration = getDevEnvironmentConfiguration();
  }

  return environmentConfiguration;
}
