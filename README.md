# the-fpl-manager

This project consists of a React frontend and a Node.js CORS proxy.

## Frontend

The src folder is a React application built with Vite and TypeScript. It uses a variety of libraries and tools:

- State management: Redux Toolkit
- HTTP requests: axios
- Form handling: react-hook-form with @hookform/resolvers and Zod for validation
- Routing: react-router-dom
- UI libraries: Headless UI, Heroicons, PrimeReact, Radix UI, react-icons, and Embla Carousel for React
- CSS-in-JS: Tailwind CSS with tailwind-merge and tailwindcss-animate
- Data fetching: SWR
- Testing: Jest with @testing-library/react and @testing-library/jest-dom
- Linting: ESLint with @typescript-eslint/eslint-plugin and eslint-plugin-react-hooks
- Formatting: Prettier with prettier-plugin-tailwindcss

In the root of the project, you can run:

- `npm run dev`: Runs the app in the development mode.
- `npm run build`: Builds the app for production.
- `npm run test`: Launches the test runner.
- `npm run lint`: Lints the project files.
- `npm run preview`: Runs a preview of the built app.

## CORS Proxy

The api folder holds a server which is a Node.js application built with Express, primarily used as a CORS proxy to handle Cross-Origin Resource Sharing issues when making requests to external APIs from the frontend.

In the api directory, you can run:

- `npm start`: Runs the app in the development mode with nodemon for automatic server restarts.

Please refer to the respective package.json files for a full list of scripts and dependencies.
