# Connectify Frontend

React + Vite frontend application for the Connectify social platform.

## Tech Stack

- React 18
- TypeScript
- Vite
- CSS Modules

## Directory Structure

```
src/
├── assets/        # Images, fonts, and other static files
├── components/    # Reusable React components
├── hooks/         # Custom React hooks
├── services/      # API service calls
├── types/         # TypeScript type definitions
├── utils/         # Utility functions
├── App.tsx        # App-specific styles
├── index.css      # Global styles
└── main.tsx       # Application entry point
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env
```

3. Start development server:
```bash
npm run dev
```

## Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
npm run type-check # Run TypeScript compiler check
```

## Development Guidelines

- Use TypeScript for all new files
- Follow the established folder structure
- Create reusable components in `components/`
- Handle API calls in `services/`
- Define types in `types/`
- Use custom hooks for shared logic