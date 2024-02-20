<!-- project Logo/Banner -->

  <h1 align="center">{{applicationName}}</h1>
  <center>
    {{applicationDescription}}
  </center>
## Index

<details open="open">
  <summary>Index</summary>
  <ol>
    <li>
      <a href="#about-the-application">About the application</a>
      <ul>
        <li><a href="#main-technologies">Main technologies</a></li>
      </ul>
    </li>
    <li>
      <a href="#dev">Dev</a>
      <ul>
        <li><a href="#extensions-for-visual-studio-code">Extensions for Visual Studio Code</a></li>
      </ul>
    </li>
    <li>
      <a href="#local-build">Local build</a>
      <ul>
        <li><a href="#prerequisite">Prerequisite</a></li>
        <li><a href="#how-to-run">How to run</a></li>
        <li><a href="#how-to-add-a-graphql-query-or-mutation">How to add a GraphQL query or mutation</a></li>
      </ul>
    </li>
  </ol>
</details>

## About the application

Description about the purpose of the application and the problems it aims to solve. You can also briefly list the main features and then detail them in a _How to Use_ section. If necessary, add images or GIFs to further illustrate.

### Main Technologies

List of the main technologies and frameworks used in the project.

- [ReactJS](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Redux](https://redux.js.org/)
- [Redux Toolkit](https://redux-toolkit.js.org)
- [RTK Query](https://redux-toolkit.js.org/rtk-query/overview)
- [MUI (Material UI)](https://mui.com/)

## Dev

### Extensions for Visual Studio Code

Required:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

Recommended:

- [Visual Studio IntelliCode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode)
- [GraphQL](https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql)
- [yarn](https://marketplace.visualstudio.com/items?itemName=gamunu.vscode-yarn)

## Local build

Instructions on how to run the application in a local development environment.

### Prerequisite

- [Node.js](https://nodejs.org/en/download/)

### How to run

1. Clone the repository
   ```sh
   git clone https://github.com/MeiFagundes/React-TypeScript-RTK-Template.git
   ```
2. Install the dependencies
   ```sh
   yarn install
   ```
3. Start the application
   ```sh
   yarn start
   ```

### How to add a GraphQL query or mutation

1. Save the query to a **.graphql** file at _src/repositories/queries_ or the mutation at _src/repositories/mutations_

2. Run the following script to generate the **.generated.ts** file

   ```sh
   yarn g
   ```

3. Add the reducer from the generated class to the store at _src/app/Store.ts_

   ```typescript
   import { api as getExchangeRatesAPI } from '../repositories/queries/GetExchangeRates.generated';

   const store = configureStore({
     reducer: {
       (...)
       [getExchangeRatesAPI.reducerPath]: getExchangeRatesAPI.reducer,
     },
     (...)
   });
   ```
