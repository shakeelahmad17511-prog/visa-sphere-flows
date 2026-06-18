# VoyaSphere Implementation Plan

VoyaSphere is a professional global visa assistance mobile application. This plan outlines a comprehensive frontend-only implementation with simulated persistence and authentication.

## Scope Summary
- **Brand Identity:** Professional blue/white theme, modern, global travel focus.
- **Core Features:** Auth (simulated), Visa Search, Visa Application, Support Center, Subscriptions, User Dashboard.
- **Data:** Mock JSON for countries, visa types, and requirements.
- **Persistence:** `localStorage` for user sessions, applications, and subscription status.

## Affected Areas
- **UI/UX:** Navigation, Layouts, Professional UI components (Shadcn).
- **Frontend Logic:** Multi-step forms, search/filter, state management for auth/applications.
- **Data Layers:** JSON constants for visa data.

## Implementation Phases

### Phase 1: Foundation & Design System
- Define global theme (professional blue palette) in `index.css`.
- Install necessary icons (lucide-react, country-flag-icons).
- Setup routing and main navigation (Bottom nav for mobile-first feel).
- **Deliverables:** Theme, Main Layout, Bottom Navigation.

### Phase 2: Authentication & Profile (Simulated)
- Create Login and Registration pages with validation.
- Implement `useAuth` hook using `localStorage`.
- Profile management page.
- **Deliverables:** Login/Signup screens, Profile page.

### Phase 3: Home & Visa Search
- Homepage with welcome message, search bar, and popular destinations grid.
- Country selection and Visa Type selection flow.
- Detailed visa requirements page with mock data.
- **Deliverables:** Home screen, Search system, Requirements detail page.

### Phase 4: Visa Application & Tracking
- Multi-step application wizard (Info -> Documents -> Review).
- Document upload simulation UI.
- Application status dashboard.
- **Deliverables:** Application form, Status tracker.

### Phase 5: Support & Subscriptions
- Support center with FAQ, Ticket submission form, and WhatsApp/Chat links.
- Subscription pricing cards (Basic, Premium, Professional).
- Payment simulation (Google Play, Card, PayPal UI).
- **Deliverables:** Support Center, Subscription page.

### Phase 6: Legal & About
- Static pages: About, Privacy Policy, Terms, Contact Us, Disclaimer.
- **Deliverables:** Static content pages.

## Execution Handoff

**Plan status:** ready

**Dispatch order:**
1. frontend_engineer — Build the entire application following the phased approach.

**Per-agent instructions:**
### 1. frontend_engineer
- **Phases:** 1-6
- **Scope:** Complete build of VoyaSphere mobile-first web app.
- **Files:** `src/App.tsx`, `src/components/*`, `src/pages/*`, `src/constants/visa-data.ts`.
- **Depends on:** none
- **Acceptance criteria:**
  - Responsive mobile-first professional UI.
  - Functional search and application flow (mocked).
  - Persistence of "applied" visas in localStorage.
  - Clean routing and professional blue/white theme.
  - All legal pages present.
