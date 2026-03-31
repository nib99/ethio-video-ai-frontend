// middleware.ts
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',     // Protect all dashboard routes
  '/api(.*)',           // Optional: protect API routes if needed
]);

export default clerkMiddleware((auth, req) => {
  // Protect dashboard routes - users must be signed in
  if (isProtectedRoute(req)) {
    auth().protect();
  }

  // Public routes like homepage, sign-in, etc. are automatically allowed
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
