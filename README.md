# Mosu - Virtual Work Experience Platform

This is a Next.js project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It's a platform designed to provide students with virtual work experiences to build skills and confidence.

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How to Build

To create a production-ready build of the application, run the following command:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

This will create an optimized build of your application in the `.next` directory.

## Where to Edit

The project follows the standard Next.js App Router structure. Here's a breakdown of where to edit different parts of the application:

-   **`app/`**: This directory contains all the routes and pages of the application.
    -   **`app/layout.tsx`**: The main layout of the application. This is where you can add a global navbar and footer.
    -   **`app/page.tsx`**: The homepage of the application.
    -   **`app/programs/page.tsx`**: The program catalog page.
    -   **`app/programs/[slug]/page.tsx`**: The program detail page.
    -   **`app/signin/page.tsx`**: The sign-in page.
    -   **`app/signup/page.tsx`**: The sign-up page.
    -   **`app/dashboard/page.tsx`**: The user dashboard page.
    -   **`app/dashboard/program/[slug]/page.tsx`**: The learning interface for a specific program.
-   **`src/components/`**: This directory contains all the reusable components used throughout the application.
    -   **`src/components/Navbar.tsx`**: The main navigation bar.
    -   **`src/components/Footer.tsx`**: The main footer.
    -   **`src/components/ProgramCard.tsx`**: The card used to display a program in the catalog.
    -   **`src/components/TestimonialCard.tsx`**: The card used to display a student testimonial.
-   **`src/lib/`**: This directory contains utility functions and Firebase integration.
    -   **`src/lib/firebase/clientApp.ts`**: The Firebase initialization file.
    -   **`src/lib/firebase/firestore.ts`**: The Firestore helper functions for interacting with the database.
-   **`src/types/`**: This directory contains all the TypeScript type definitions.
    -   **`src/types/firestore.ts`**: The TypeScript interfaces for the Firestore data structures.
-   **`public/`**: This directory contains all the static assets, such as images and icons.
-   **`styles/`**: This directory contains all the global styles.
    -   **`styles/globals.css`**: The main global stylesheet.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

