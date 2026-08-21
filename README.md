# Nerv Site

Nerv Site is a rebuild of Nervego's company website using Laravel, Vue.js, Inertia.js, and TypeScript.

The old website was mostly built with Blade templates and static HTML. I started this project to move it into a more modern Laravel + Vue setup, make the frontend easier to maintain, and give us a better base for adding actual application features later.

As the project grew, it went beyond just migrating the public website. I also started building authentication, roles, an admin dashboard, event management, and other internal management features.

> **Status:** Development is currently paused because company priorities changed.  
> **Access:** This is a private Nervego repository for internal collaborators and authorized reviewers.

## Tech Stack

**Backend**

<p>
  <img src="https://img.shields.io/badge/PHP-777BB4?logo=php&logoColor=white" alt="PHP">
  <img src="https://img.shields.io/badge/Laravel-FF2D20?logo=laravel&logoColor=white" alt="Laravel">
</p>

**Frontend**

<p>
  <img src="https://img.shields.io/badge/Vue.js-4FC08D?logo=vuedotjs&logoColor=white" alt="Vue.js">
  <img src="https://img.shields.io/badge/Inertia.js-9553E9?logo=inertia&logoColor=white" alt="Inertia.js">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white" alt="Vite">
</p>

**Testing**

<p>
  <img src="https://img.shields.io/badge/Pest-8B5CF6?logo=php&logoColor=white" alt="Pest">
</p>

## What I Worked On

### Website Migration

The main goal was to move the existing Nervego website away from the older Blade/static setup and rebuild it around Vue and Inertia.

The public side includes pages for:

- Home
- About
- Careers
- Contact
- Events
- Blog
- Company programs and services

A lot of the original design and assets still had to be preserved, so I separated the legacy styles from the newer application styles instead of trying to rewrite everything at once.

This made it possible to migrate the site gradually without breaking the existing design.

### Vue & Inertia Structure

I converted the frontend into reusable Vue layouts and components and used Inertia to keep Laravel responsible for routing and backend logic.

This gave the project a cleaner structure than having separate Blade pages repeating the same markup and frontend behaviour.

I also worked on things like:

- shared layouts
- navigation and dropdown behaviour
- mobile menu behaviour
- reusable dashboard components
- quick search
- frontend asset organization
- responsive fixes

### Authentication & Roles

I added the authentication foundation needed for the dashboard and internal features.

This includes:

- login and account management
- email verification
- password and profile settings
- two-factor authentication
- user roles
- admin middleware
- role-aware dashboard access

### Admin Dashboard

I started building an internal dashboard so the site could eventually be managed from one place instead of requiring code changes for everything.

The dashboard includes shared layout and navigation infrastructure, along with areas for:

- Events
- Careers
- Blog
- Users

Some of these sections are more complete than others since development stopped before the full admin system was finished.

### Event Management

The event module is one of the more complete dashboard features.

It includes:

- creating and editing events
- draft, published, and archived states
- event objectives
- creator tracking
- SEO fields
- validation
- authorization policies
- pagination

Database transactions are used around write operations where needed so related changes are kept consistent.

## Testing

The project includes automated tests around areas such as:

- authentication
- profile and account settings
- two-factor authentication
- dashboard access and behaviour

There were also CI checks in place while the project was actively being developed.

## Current State

The project is not finished and is not currently deployed.

Development stopped after Nervego's priorities moved to other projects, so some planned dashboard and content-management functionality was never completed.

The codebase is still useful as a record of the migration work, frontend restructuring, authentication setup, admin architecture, and event-management features that were completed before development paused.

## Repository Access

This repository contains internal Nervego project code and is kept private.

## License

Proprietary and internal to Nervego. Unauthorized use, distribution, or disclosure is not permitted.
