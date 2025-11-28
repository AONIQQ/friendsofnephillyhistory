// Simple admin authentication utility using sessionStorage
const AUTH_KEY = "admin_authenticated";
const PASSWORD_KEY = "admin_password";

export const adminAuth = {
    // Check if user is authenticated
    isAuthenticated(): boolean {
        if (typeof window === "undefined") return false;
        return sessionStorage.getItem(AUTH_KEY) === "true";
    },

    // Authenticate with password
    authenticate(password: string): boolean {
        if (typeof window === "undefined") return false;
        sessionStorage.setItem(AUTH_KEY, "true");
        sessionStorage.setItem(PASSWORD_KEY, password);
        return true;
    },

    // Clear authentication
    logout() {
        sessionStorage.removeItem(AUTH_KEY);
        sessionStorage.removeItem(PASSWORD_KEY);
    },

    // Get auth token for API calls
    getAuthToken(): string {
        if (typeof window === "undefined") return "";
        if (!this.isAuthenticated()) return "";
        return sessionStorage.getItem(PASSWORD_KEY) || "";
    }
};
