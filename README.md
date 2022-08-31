### Bluebird Development

# Web Starter

We use the [Next](https://nextjs.org/) framework for our web projects.

It uses the [JavaScript](https://www.javascript.com/) language with the [React](https://reactjs.org/).

We use the [Typescript](https://www.typescriptlang.org/) language to add types to Javascript.

## Different methodologies

- An app can be server-rendered. This is if the server processes the JavaScript on each request,
  and then return the resulting HTML. (Next's default)
- An app can be static site generated. This is if the code is built once, and a server/CDN returns the same resulting HTML on each request.
- An app can be client-rendered. This is if a server/CDN returns the JavaScript application framework, and the client (the browser) processes everyting "locally".

Next has the ability to function with a combination of these methodologies.

This starter uses a combination of client-side rendering and static site rendering. (Note, the difference between the two is simply the amount of the JavaScript library that is sent to the client. ie. client-side rendering: 100% of the library. static site rendering: 0% of the library.)

---

The tools that we use:

- [tailwindcss](https://tailwindcss.com/) - Styling
- [zustand](https://github.com/pmndrs/zustand) - Local state management
- [React Query](https://react-query.tanstack.com/) - Remote data fetching
- [Axios](https://github.com/axios/axios) - HTTP client (used with React Query)
- [ESLint](https://eslint.org/) - Code linting. If using VSCode, make sure [this](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) plugin is installed.
- [Prettier](https://prettier.io/) - Opinionated code formatter.
- [Storybook](https://storybook.js.org/) - Build and present UI components in isolation.
