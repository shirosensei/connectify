# Connectify Backend

Node.js + Express backend server for the Connectify social platform.

## Tech Stack

- Node.js
- Express
- TypeScript
- PostgreSQL
- Kafka

## Directory Structure

```
├── config/        # Configuration files
├── controllers/   # Route controllers
├── middlewares/   # Express middlewares
├── models/        # Database models
├── services/      # Business logic
└── src/
├── types/    # TypeScript type definitions
└── utils/    # Utility functions
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
npm run dev        # Start development server with hot-reload
npm run build      # Build TypeScript code
npm run start      # Start production server
npm run lint       # Run ESLint
```

## Environment Variables

```env
PORT=3000
NODE_ENV=development
DATABASE_URL=postgresql://user:password@localhost:5432/connectify
KAFKA_BROKERS=localhost:9092
```

## API Documentation

Base URL: `http://localhost:3000/api`

Detailed API documentation is available at `/api-docs` when running the server.

## Development Guidelines

- Use TypeScript for all new files
- Follow RESTful API design principles
- Write controllers for route handling
- Implement business logic in services
- Use middlewares for cross-cutting concerns