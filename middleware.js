import { authMiddleware } from "@clerk/nextjs";
 
// See https://clerk.com/docs/references/nextjs/auth-middleware
// for more information about configuring your Middleware
export default authMiddleware({
  // Allow signed out users to access the specified routes:
   publicRoutes: ['/', '/sign-in', 'sign-up'],
});
 
export const config = {
  matcher: [
    "/dashboard"
  ]
};