# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a Kinde Workflow template that integrates with Incognifi services to assign user IDs during the authentication process. The workflow runs server-side on Kinde's infrastructure and is triggered after user authentication.

## Development Commands

```bash
# Install dependencies
npm install

# Run linting
npm run lint

# Run type checking
npm run typecheck
```

## Architecture & Structure

### Core Components

1. **Workflow Logic** (`kindeSrc/environment/workflows/`):
   - `postUserAuthentication/Workflow.ts`: Main workflow that fetches user ID from Incognifi orchestrator and stores it as a Kinde user property
   - Executed server-side on Kinde's infrastructure after user authentication
   - Uses Kinde API to read/write user properties

2. **UI Components** (`kindeSrc/environment/pages/`):
   - React-based authentication pages using React 19
   - `root.tsx`: HTML template wrapper
   - `components/widget.tsx`: Reusable UI components
   - `layouts/default.tsx`: Page layout structure
   - `styles/styles.ts`: Centralized styling configuration

3. **Configuration**:
   - `kinde.json`: Specifies source directory and version
   - Environment variable required: `ORCHESTRATOR_URL` (Incognifi API endpoint)

### Key Integration Points

- **Incognifi Integration**: The workflow communicates with an external Incognifi orchestrator service to:
  1. Check if user already has an `incognifi-user-id` property
  2. If not, fetch a new user ID from the orchestrator API
  3. Store the ID as a Kinde user property

- **Error Handling**: Workflow configured with `failurePolicy.action: "stop"` - authentication stops if workflow fails

### Development Notes

- No build step required - code runs directly on Kinde
- No test framework configured - workflows are tested in Kinde environment
- Uses `@kinde/infrastructure` v0.6.0 for Kinde-specific utilities
- TypeScript strict mode enabled with ES2020 target