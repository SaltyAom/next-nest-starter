# Next-Nest Enterprise-scale Starter Template
Starter template of Next.js with Nest.js for an Enterprise-scale application.
  
![Enterprise-sama](https://www.spriters-resource.com/resources/sheet_icons/108/111095.png)

## Why?
Next.js, a library for building Server-Side-Rendering React app.
Nest.js, a highly opinionated framework for building Node.js server.
It would be great to bring the best of both world into one ap without building multiple server.

By putting Next.js and Next.js together, we could bring a full control-over frontend and backend.
Consider the following case:
* Complete control over server and client.
* Complete control over the Next's `getInitialProps()`.
* Faster response due to the request flow in server.
* Implement complete for client for each route.
* One project for everything.

## Template
Configuring Next.js with Nest.js is complicate and high time-consumption despite setting up test-suite for both client, server and end-to-end testing is a real mess.

Feature this starter template include:
* Complete test-suite including unit-test for both client and server, end-to-end testing, linter and TypeScript's type testing
* Aliased Module and path for easier usage.
* Complete seperation on client and server.
* Production-ready of Next.js including Preact, Stylus and Service Worker.
* Complete example file and test-suite.
* Configured to work on production.
* TypeScript

## Path alias
Path alias is configured at next.config.js, .babelrc and tsconfig.json.
* next.config.js - Next build time, dev environment.
* .babelrc - dev environment and test suite.
* tsconfig.json - IDE hint, path intellisense and dev environment.

## Structure configuration
Main structure
* pages
    * [root] - contains next.js root page files eg: `_app.tsx`, `_document.tsx` 
    * views
        * [page].tsx - contains page file which require in Nest's `@Render(<page>)`
* client - contains file for next.js usage eg: `CSS`
    * public - exposed to public
        * styles - contains styles file
        * fonts - contains fonts file
    * components - contains React components
    * layouts - contains React layouts.
    * libs - contains JavaScript components.
    * stores - contains store.
    * pageTypes - contains Page's types.
* src - contains Nest.js file
    * app.module - root module.
    * main.ts - main server file.
    * helpers
    * services
    * pipes
    * guards
    * interceptors
    * decorators
* __tests__ - server end-to-end test
* __tests_client__ - Client test.
    * __tests__ - contains client test file.
    * __mocks__ - contains client mock file.

Dev structure
* jest.client.config.js - Jest's client configuration.
* jest.client.setup.js - Jest's client setup.
* jest.server.config.js - Jest's server configuration.
* tsconfig.json - Client's TypeScript configuration (also contains server's path alias for IDE)
* tsconfig.server.json - Server's TypeScript configuration.

## Path aliased
* Client
    * pages - pages
    * ~ - client
    * public - client/public
    * fonts - client/public/fonts
    * styles - client/public/styles
    * components - client/components
    * layouts - client/layouts
    * stores - client/stores
    * libs - client/libs
    * pageTypes - client/pageTypes
* Server
    * src - src,
    * helpers - src/helpers,
    * @services - src/services,
    * @pipes - src/pipes,
    * @guards - src/guards,
    * @interceptors - src/interceptors
    * @decorators - src/decorators

* Scripts
A configured scripts in package.json.
* dev - Start development server.
* build - Create production build.
    * build:clean - Remove previous build.
    * build:server - Build Nest.js production server.
    * build:ui - Build Next.js production client.
* start - Start production server.
* format - Format development file based on `.prettierrc`.
* test - Test suite.
    * test:lint - Linter test.
    * test:type - TypeScripts's type and aliased path tests.
    * test:unit - Run Nest's unit-tests.
    * test:client - Run Next.js tests.
    * test:e2e - Run Nest's end-to-end tests.

## Docker Compose
Mostly these structure isn't suitable on most serverless/Node hosting platform, dockerize a project looks like a most ideal way to solve the problem.
`Dockerfile` and `docker-compose.yml` is provided the help getting a quick start for testing app on production or setting up a contained environment.

### Using with Docker Compose:  
For the first time:
```
docker-compose up --build
```
  
After Docker environment is created it will persisted which mean you don't have to rebuild everytime you want to start a dev environment:
```
docker-compose up
```

### Note
* Combination of both Next and Nest is large, watching files change and restart the development server takes some time usually around 2-3 seconds but also depend on CPU its using.
* To speed up server restart, you might also remove `NODE_ENV=development` in package.json's `dev` script, but as a result Next won't detect a file change.
* If you're using `Fastify Adapter`, make sure you include `0.0.0.0` as second parameter in `listen()`.
