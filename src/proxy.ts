import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
    function middleware(req) {
        const token = req.nextauth.token;
        const path = req.nextUrl.pathname;

        const publicPaths = ["/", "/about", "/services", "/contact", "/login", "/register"];
        const isPublic = publicPaths.some(p => path === p || (path.startsWith(p) && path !== "/" && p !== "/"));

        // Redirect logged-in users away from auth pages
        if (token) {
            if (path.startsWith("/login") || path.startsWith("/register")) {
                return NextResponse.redirect(new URL("/", req.url));
            }
        }

        // Redirect unauthenticated users away from protected pages
        if (!token && !isPublic) {
            return NextResponse.redirect(new URL("/login", req.url));
        }

        // Role-based protection
        if (token) {
            if (path.startsWith("/manager") && token.role !== "MANAGER") {
                return NextResponse.redirect(new URL("/unauthorized", req.url));
            }

            if (path.startsWith("/employee") && token.role !== "MANAGER" && token.role !== "EMPLOYEE") {
                return NextResponse.redirect(new URL("/unauthorized", req.url));
            }
        }

        return NextResponse.next();
    },
    {
        callbacks: {
            authorized: () => true,
        },
        pages: {
            signIn: "/login",
            error: "/error",
        }
    }
);

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api/auth (auth routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public files (images etc)
         */
        "/((?!api|_next/static|_next/image|favicon.ico).*)",
    ],
};
