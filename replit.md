# Max Drive Uganda Vehicle Import Platform

## Overview

This is a modern web application for Max Drive Uganda Limited, a vehicle import and logistics company. The platform provides a comprehensive landing page showcasing the company's vehicle sourcing, shipping, customs clearing, and registration services. Built with React, Vite, and modern web technologies, it focuses on transparency and user experience for potential customers looking to import vehicles to Uganda.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens and orange (#F97316) primary branding
- **Animations**: Framer Motion for smooth page interactions and transitions
- **Icons**: Lucide React for consistent iconography throughout the interface
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Session Management**: Connect-PG-Simple for PostgreSQL-backed sessions
- **API Design**: RESTful API structure with /api prefix routing
- **Development**: Hot module replacement via Vite integration

### Data Storage Solutions
- **Database**: PostgreSQL with Neon serverless hosting
- **Schema Management**: Drizzle Kit for migrations and schema synchronization
- **Connection**: @neondatabase/serverless for optimized serverless connections
- **Validation**: Zod schemas integrated with Drizzle for type-safe data handling

### Authentication and Authorization
- **Session-based**: Traditional session cookies using connect-pg-simple
- **Storage**: Sessions persisted in PostgreSQL database
- **Security**: CSRF protection and secure session configuration
- **User Management**: Basic user schema with username/password authentication

### External Dependencies
- **Database Hosting**: Neon PostgreSQL serverless platform
- **CDN**: Tailwind CSS Play CDN for rapid styling without build complexity
- **Fonts**: Google Fonts (Inter) for typography
- **Communication**: WhatsApp integration for customer contact (+256708914167)
- **Deployment**: Replit-optimized with runtime error overlay and cartographer plugins

The application follows a monolithic architecture with clear separation between client, server, and shared code. The build process creates a static frontend and bundled Node.js server, making it suitable for various deployment environments while maintaining development simplicity on Replit.