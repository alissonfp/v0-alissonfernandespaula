# Welcome

## Technologies Used

This project uses a modern and efficient stack for web development:

1. **Vite**: A modern and fast build tool for front-end projects. It offers a development server with Hot Module Replacement (HMR) and an optimized build process, resulting in faster startup and compilation times.

2. **React**: The main JavaScript library used to build the user interface. React allows creating reusable components and efficiently managing the application state.

3. **TypeScript**: A typed superset of JavaScript. It adds optional static typing to JavaScript, which helps detect errors earlier in the development process and improves code maintainability.

4. **Tailwind CSS**: A utility-first CSS framework. It allows for quickly styling components using pre-defined classes, which speeds up development and maintains design consistency.

5. **shadcn/ui**: A component library mentioned in the project. It provides pre-built and styled React components that can be easily customized and integrated into the project.

6. **Vercel**: The project is configured to be hosted on Vercel. Vercel is a hosting and deployment platform that integrates well with React projects and offers features such as automatic deployments, pull request previews, and easy configuration of custom domains.

Additionally, the project uses other tools and libraries to enhance development and functionality:

- **ESLint**: For linting and maintaining code quality.
- **Prettier**: For consistent code formatting.
- **@tanstack/react-query**: For efficient state management and data requests.

The `vite.config.ts` file shows some project-specific configurations, such as the use of the `@vitejs/plugin-react-swc` plugin for fast React compilation, and the configuration of aliases for cleaner imports.

This set of technologies forms a modern and efficient stack for web development, offering a good development experience and optimized performance for the end user.

## How can I edit this code?

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.