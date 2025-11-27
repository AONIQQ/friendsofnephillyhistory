/**
 * Theme Configuration - Northeast Philadelphia Hall of Fame
 * 
 * Navy blue and white color scheme inspired by the official logo
 */

export const themeConfig = {
    // Primary color (deep navy blue - prestigious, authoritative)
    primary: {
        hue: 220,        // Navy Blue
        saturation: 70,  // Rich but not overwhelming
        lightness: 25,   // Deep, distinguished navy
    },

    // Accent color (gold/bronze for achievement and honor)
    accent: {
        hue: 45,         // Gold
        saturation: 85,
        lightness: 50,
    },

    // Secondary accent (white/silver for elegance)
    secondary: {
        hue: 220,
        saturation: 15,
        lightness: 95,
    },

    // Generate color variations automatically
    get colors() {
        return {
            // Primary variations (navy blue)
            'primary-900': `hsl(${this.primary.hue}, ${this.primary.saturation}%, ${this.primary.lightness - 5}%)`,
            'primary-800': `hsl(${this.primary.hue}, ${this.primary.saturation}%, ${this.primary.lightness}%)`,
            'primary-700': `hsl(${this.primary.hue}, ${this.primary.saturation - 10}%, ${this.primary.lightness + 10}%)`,
            'primary-600': `hsl(${this.primary.hue}, ${this.primary.saturation - 20}%, ${this.primary.lightness + 20}%)`,
            'primary-500': `hsl(${this.primary.hue}, ${this.primary.saturation - 25}%, ${this.primary.lightness + 30}%)`,

            // Accent variations (gold)
            'accent-500': `hsl(${this.accent.hue}, ${this.accent.saturation}%, ${this.accent.lightness}%)`,
            'accent-400': `hsl(${this.accent.hue}, ${this.accent.saturation}%, ${this.accent.lightness + 10}%)`,
            'accent-300': `hsl(${this.accent.hue}, ${this.accent.saturation - 10}%, ${this.accent.lightness + 20}%)`,
            'accent-600': `hsl(${this.accent.hue}, ${this.accent.saturation + 5}%, ${this.accent.lightness - 10}%)`,

            // Secondary variations (light/white)
            'secondary-100': `hsl(${this.secondary.hue}, ${this.secondary.saturation}%, ${this.secondary.lightness}%)`,
            'secondary-200': `hsl(${this.secondary.hue}, ${this.secondary.saturation + 5}%, ${this.secondary.lightness - 5}%)`,
        };
    },
};

/**
 * Northeast Philadelphia Hall of Fame Theme
 * 
 * This theme uses:
 * - Deep Navy Blue: Represents prestige, trust, and authority
 * - Gold/Bronze Accents: Symbolizes achievement, excellence, and honor
 * - White: Clean, elegant backgrounds for readability
 * 
 * The color scheme evokes the distinguished nature of a Hall of Fame
 * while maintaining connection to Northeast Philadelphia's identity.
 */
