// Simple admin authentication utility using sessionStorage
const ADMIN_PASSWORD = "NEPhilly";
const AUTH_KEY = "admin_authenticated";

export const adminAuth = {
    // Check if user is authenticated
    isAuthenticated(): boolean {
        if (typeof window === "undefined") return false;
        return sessionStorage.getItem(AUTH_KEY) === "true";
    },

    // Authenticate with password
    authenticate(password: string): boolean {
        if (password === ADMIN_PASSWORD) {
            sessionStorage.setItem(AUTH_KEY, "true");
            return true;
        }
        return false;
    },

    // Clear authentication
    logout() {
        sessionStorage.removeItem(AUTH_KEY);
    },

    // Get auth token for API calls
    getAuthToken(): string {
        return this.isAuthenticated() ? ADMIN_PASSWORD : "";
    }
};
