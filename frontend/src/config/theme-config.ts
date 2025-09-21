// Theme Configuration - Easy visual customization
export const themeConfig = {
  // Color Palette - Override CSS variables
  colors: {
    primary: "#030213",
    secondary: "#ececf0",
    accent: "#e9ebef",
    background: "#ffffff",
    foreground: "#0a0a0a",
    muted: "#ececf0",
    border: "rgba(0, 0, 0, 0.1)",
    
    // Chart Colors
    chart: {
      1: "#646cff",
      2: "#7dd3fc", 
      3: "#86efac",
      4: "#fbbf24",
      5: "#f87171",
    },
  },

  // Typography Configuration
  typography: {
    fontFamily: {
      primary: "Inter, system-ui, sans-serif",
      heading: "Inter, system-ui, sans-serif",
      mono: "JetBrains Mono, monospace",
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem", 
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },

  // Layout Configuration
  layout: {
    maxWidth: "1280px",
    containerPadding: {
      mobile: "1rem",
      tablet: "1.5rem", 
      desktop: "2rem",
    },
    sectionSpacing: {
      mobile: "4rem",
      desktop: "6rem",
    },
    radius: {
      sm: "0.375rem",
      md: "0.5rem", 
      lg: "0.625rem",
      xl: "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
    },
  },

  // Animation Configuration
  animations: {
    duration: {
      fast: "0.15s",
      normal: "0.3s",
      slow: "0.5s",
      slower: "0.8s",
    },
    easing: {
      ease: "ease",
      easeIn: "ease-in",
      easeOut: "ease-out", 
      easeInOut: "ease-in-out",
      spring: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    },
    enabled: true,
    reduceMotion: false,
  },

  // Component Styles
  components: {
    button: {
      borderRadius: "0.5rem",
      padding: {
        sm: "0.5rem 1rem",
        md: "0.75rem 1.5rem",
        lg: "1rem 2rem",
      },
    },
    card: {
      borderRadius: "0.75rem",
      shadow: "0 1px 3px 0 rgb(0 0 0 / 0.1)",
      hoverShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
    },
    input: {
      borderRadius: "0.5rem",
      borderWidth: "1px",
    },
  },

  // Logo Configuration
  logo: {
    type: "text" as "text" | "image",
    text: "CNTT",
    fontSize: "1.5rem",
    fontWeight: 700,
    // For image logo:
    // src: "/logo.png",
    // alt: "Logo",
    // width: 120,
    // height: 40,
  },

  // Dark Mode Configuration
  darkMode: {
    enabled: true,
    defaultMode: "light" as "light" | "dark" | "system",
    colors: {
      primary: "#ffffff",
      secondary: "#262626", 
      accent: "#404040",
      background: "#0a0a0a",
      foreground: "#fafafa",
      muted: "#262626",
      border: "#262626",
    },
  },
} as const;

// CSS Custom Properties Generator
export const generateCSSVariables = (config: typeof themeConfig) => {
  return {
    // Colors
    "--color-primary": config.colors.primary,
    "--color-secondary": config.colors.secondary,
    "--color-accent": config.colors.accent,
    "--color-background": config.colors.background,
    "--color-foreground": config.colors.foreground,
    "--color-muted": config.colors.muted,
    "--color-border": config.colors.border,
    
    // Typography
    "--font-family-primary": config.typography.fontFamily.primary,
    "--font-family-heading": config.typography.fontFamily.heading,
    "--font-size-base": config.typography.fontSize.base,
    "--font-weight-normal": config.typography.fontWeight.normal.toString(),
    "--font-weight-medium": config.typography.fontWeight.medium.toString(),
    
    // Layout
    "--max-width": config.layout.maxWidth,
    "--radius-lg": config.layout.radius.lg,
    
    // Animation
    "--duration-normal": config.animations.duration.normal,
    "--easing-ease-out": config.animations.easing.easeOut,
  };
};

// Type exports
export type ThemeConfig = typeof themeConfig;
export type ColorConfig = typeof themeConfig.colors;
export type TypographyConfig = typeof themeConfig.typography;