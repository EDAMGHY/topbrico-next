# Starter NextJS

## Overview

This is a starter template for building applications with Next.js. It includes a basic setup with TypeScript, Tailwind CSS, and Docker support.

## Features

- **Next.js**: The React framework for production.
- **TypeScript**: Typed JavaScript at Any Scale.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Docker**: Containerization for consistent development and deployment environments.

## Getting Started

### Prerequisites

- Node.js (>= 20)
- Docker (optional, for containerization and deploy)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Copy the example environment variables file and configure it:

   ```bash
   cp .env.example .env
   ```

### Running the Development Server

To start the development server, run:

```bash
yarn dev
```

## Folder Structure

The starter template includes the following folders:

- **@/ui**: Contains UI elements powered by [shadcn](https://ui.shadcn.com).
- **@/theme**: Houses all theme-related setup, including dark mode and multi-theme configurations.
- **@/layout**: Contains layout-related components and configurations.
- **@/types**: Stores interfaces and types to ensure type safety.
- **@/lib**: Includes utility functions and helpers used throughout the project.
