# Todo List Application

A modern, sleek todo list application built with **React** and Next.js.

## Built With

- **React 19** - The core UI library
- **Next.js 14** - React framework for production
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **Lucide React** - Icons

## Features

- ✅ Add new tasks
- ✅ Mark tasks as complete/incomplete
- ✅ Delete tasks
- ✅ Filter tasks (All, Active, Completed)
- ✅ Clear all completed tasks
- ✅ Task counter
- ✅ Dark theme UI
- ✅ Responsive design
- ✅ No login required - works entirely in your browser

## Getting Started

### Prerequisites

Make sure you have Node.js installed (version 18 or higher recommended).

### Installation

1. **Install dependencies:**

\`\`\`bash
npm install
\`\`\`

Or if you use pnpm:

\`\`\`bash
pnpm install
\`\`\`

Or if you use yarn:

\`\`\`bash
yarn install
\`\`\`

2. **Run the development server:**

\`\`\`bash
npm run dev
\`\`\`

Or:

\`\`\`bash
pnpm dev
\`\`\`

Or:

\`\`\`bash
yarn dev
\`\`\`

3. **Open your browser:**

Navigate to [http://localhost:3000](http://localhost:3000)

You should see your todo list application running!

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Creates an optimized production build
- `npm run start` - Runs the production build
- `npm run lint` - Runs the linter

## Project Structure

\`\`\`
├── app/
│   ├── page.tsx          # Main todo list page (React component)
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   ├── todo-input.tsx    # Input component for adding todos
│   ├── todo-list.tsx     # List component displaying todos
│   ├── todo-item.tsx     # Individual todo item component
│   └── todo-filters.tsx  # Filter buttons component
└── package.json          # Dependencies and scripts
\`\`\`

## How It Works

This is a **client-side React application** - all the todo data is stored in React state using the `useState` hook. The data persists only during your browser session and will reset when you refresh the page.

### Main React Components:

- **Home (page.tsx)** - Main component managing todo state
- **TodoInput** - React component for adding new todos
- **TodoList** - React component that renders the list
- **TodoItem** - React component for each individual todo
- **TodoFilters** - React component for filtering and clearing todos

All components use React hooks and modern React patterns!

## Customization

You can customize the colors and theme by editing `app/globals.css`. The design uses CSS custom properties (variables) for easy theming.

## Notes

- This uses Next.js App Router, which is built on React
- All components are React client components (marked with "use client")
- No backend or database - everything runs in the browser
- No authentication required
