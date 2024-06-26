# the-fpl-manager

The FPL Manager is a web application that gives Fantasy Premier League managers the opportunity to view their historical performance as an FPL manager, and compare against their FPL manager friends (or enemies!).

The project consists of a React frontend and a Node.js/Express CORS proxy.

![Landing Image](./public/landing-2.png)

## Frontend

The src folder is a React application built with Vite and TypeScript. It uses a variety of libraries and tools:

- State management: Redux Toolkit with redux-persist for state persistence
- HTTP requests: Axios
- Routing: react-router-dom
- UI libraries: Shadcn/ui, Radix UI and lucide-react and react-icons for icons
- Table management: @tanstack/react-table
- CSS-in-JS: Tailwind CSS with tailwind-merge and tailwindcss-animate
- Data fetching: SWR
- Testing: Cypress for e2e testing, Vitest and React Testing Library for unit testing
- Linting: ESLint with @typescript-eslint/eslint-plugin and eslint-plugin-react-hooks
- Formatting: Prettier with prettier-plugin-tailwindcss

In the root of the project, you can run:

- `npm run dev`: Runs the app in the development mode
- `npm run test`: Launches the Vitest test runner
- `npm run cy:open`: Opens the Cypress Test Runner
- `npm run lint`: Lints the project files

## CORS Proxy

The api folder holds a server which is a Node.js application built with Express and cors, primarily used as a CORS proxy to handle Cross-Origin Resource Sharing issues when making requests to external APIs from the frontend.

In the api directory, you can run:

- `npm start`: Runs the app in the development mode with nodemon for automatic server restarts

Please refer to the respective package.json files for a full list of scripts and dependencies.
