# Enterprise Next-Nest Starter Template
Combination of using Nextjs with Nestjs for an Enterprise-scale application.
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