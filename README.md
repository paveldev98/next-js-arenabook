# Final Project: ArenaBook Web Application

Design and develop a court/gym booking web application for people who want to book slots for their recreational sports.

ArenaBook is a web application that allows users to book their favorite sports venues. The idea for this application came from the need of users who want a quick and easy way to book their recreational sports activities. Therefore, my goal was to develop an easy to navigate app with a modern UI. ArenaBook is a web app which allows users to filter courts based on the selected sport and book a court of their choice.

## Figma Design
![image](https://github.com/user-attachments/assets/ffe7aef9-c626-40ef-bfe6-862602753f86)

## DrawSQL Design
![image](https://github.com/user-attachments/assets/9f0241e5-99d6-498a-9023-e999c5d8b69c)

## UI Architecture/Layout

- [x] Landing page
  - [x] Hero area
  - [x] Log-in form
  - [x] Register form
- [x] Login page
- [x] Register page
- [x] Profile page
  - [x] Update personal information
  - [x] Change profile picture
- [x] Sports page
  - [x] Selection of a specific sport
  - [x] Selected sport page: Courts/gyms mapped and displayed as cards for a selected sport
    - [x] Provide basic court information (location, name, owner name, owner info, price)
    - [x] Book a court
  - [x] Sub-page: Selected court
    - [x] Show image galler, calendar for selecting date and time for the activity
    - [x] Add booking button adds booking to My Bookings page
- [x] My Bookings page
  - [x] Review booking feature
  - [x] Remove booking feature
- [x] Profile page
  - [x] Profile picture page upload with Cloudinaty API
  - [x] Add info: First Name, Last Name, Age, Role to the database

## Technologies

- [x] Next.js
- [x] Node.js backend
- [x] TypeScript
- [x] PostgreSQL database
  - [x] REST API for CRUD operations
  - [x] DrawSQL schema
  - [x] Zod server-side validation
- [x] Self written user authentication
- [x] Self written user authorization
- [x] Image upload
  - [x] Cloudinary API
- [x] State management solution
  - [x] React useState for local state
- [x] SEO
  - [x] Specific metadata for each page
- [x] Testing
  - [x] Unit testing using JEST
  - [x] E2E testing using playwright

## Other requirements

- [x] Logo
- [x] favicon
- [x] Deployed

## Deployment

- Fly.io
- Docker

## Authentication

Some pages are protected with sessions and can only be accessed by authenticated users. User needs to login with username and password to be authenticated. Authenticated users can access the protected pages and perform CRUD operations on the courts.
