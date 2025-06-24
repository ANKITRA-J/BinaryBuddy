# BinaryType - Binary Conversion Practice Application

## Overview

BinaryType is a web application designed to help users master binary conversion through interactive practice. It's built as a full-stack application with a React frontend and Express backend, featuring a clean dark-themed UI focused on educational practice sessions.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **UI Library**: Radix UI components with shadcn/ui styling system
- **Styling**: Tailwind CSS with custom dark theme variables
- **State Management**: React hooks with custom practice logic in `useBinaryPractice`
- **Routing**: Wouter for lightweight client-side routing
- **Data Fetching**: TanStack Query for server state management

### Backend Architecture
- **Runtime**: Node.js with Express server
- **Language**: TypeScript with ESM modules
- **Development**: Hot reloading with Vite dev middleware integration
- **Storage**: In-memory storage with interface for future database integration
- **API Structure**: RESTful endpoints prefixed with `/api`

### Database Strategy
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Current State**: Using in-memory storage (`MemStorage` class)
- **Future Ready**: Database schema defined in `shared/schema.ts` with user table
- **Migration Support**: Drizzle Kit configured for schema migrations

## Key Components

### Practice Engine
- **Binary Utilities**: Core conversion functions between decimal and binary
- **Question Generation**: Dynamic question creation for both conversion directions
- **Validation**: Input validation for binary (0,1 only) and decimal (numbers only) 
- **Statistics Tracking**: Real-time accuracy calculation and performance metrics

### UI Components
- **Mode Selector**: Toggle between decimal-to-binary and binary-to-decimal modes
- **Practice Area**: Main interaction area with question display and input handling
- **Stats Display**: Live accuracy and performance tracking
- **Conversion Chart**: Reference chart showing binary equivalents for common values

### State Management
- **Practice Hook**: Centralized practice logic with question generation and answer checking
- **Statistics**: Persistent tracking of correct/wrong answers and accuracy percentage
- **Input Handling**: Real-time validation and feedback system

## Data Flow

1. **Practice Session**: User selects conversion mode (decimal→binary or binary→decimal)
2. **Question Generation**: System generates random numbers (1-255) and creates appropriate questions
3. **User Input**: Real-time validation ensures only valid characters (0,1 for binary, 0-9 for decimal)
4. **Answer Checking**: Immediate feedback with correct/incorrect status and answer revelation
5. **Statistics Update**: Live accuracy calculation and performance tracking
6. **Next Question**: Automatic progression to new questions after answer submission

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Router (Wouter)
- **Build Tools**: Vite, TypeScript, ESBuild for production builds
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer

### UI Components
- **Radix UI**: Complete component library for accessible UI primitives
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Utility for managing component variants

### Backend Dependencies
- **Database**: Drizzle ORM, Neon Database serverless driver, PostgreSQL support
- **Validation**: Zod for runtime type checking and validation
- **Session Management**: Connect-pg-simple for PostgreSQL session store
- **Development**: TSX for TypeScript execution, runtime error handling

## Deployment Strategy

### Development Environment
- **Replit Integration**: Configured for Replit with cartographer plugin for development
- **Hot Reloading**: Vite middleware integrated with Express for seamless development
- **Port Configuration**: Development server on port 5000 with external port 80

### Production Build
- **Frontend**: Vite builds React app to `dist/public`
- **Backend**: ESBuild bundles server code to `dist/index.js`
- **Deployment Target**: Autoscale deployment configured in Replit
- **Environment**: Production mode with optimized builds and static file serving

### Database Deployment
- **Development**: In-memory storage for immediate development
- **Production Ready**: PostgreSQL configuration with Drizzle migrations
- **Environment Variables**: `DATABASE_URL` required for production database connection

## Changelog
- June 24, 2025. Initial setup

## User Preferences
Preferred communication style: Simple, everyday language.