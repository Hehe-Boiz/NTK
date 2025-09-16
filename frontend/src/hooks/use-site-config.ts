import { siteConfig } from "../config/site-config";
import { themeConfig } from "../config/theme-config";

// Hook for accessing site configuration
export function useSiteConfig() {
  return siteConfig;
}

// Hook for accessing theme configuration
export function useThemeConfig() {
  return themeConfig;
}

// Hook for getting navigation items
export function useNavigation() {
  return siteConfig.navigation;
}

// Hook for getting footer configuration
export function useFooterConfig() {
  return siteConfig.footer;
}

// Hook for getting organization info
export function useOrganizationInfo() {
  return siteConfig.organization;
}

// Hook for getting contact information
export function useContactInfo() {
  return siteConfig.contact;
}

// Hook for getting social media links
export function useSocialLinks() {
  return siteConfig.social;
}

// Hook for feature flags
export function useFeatures() {
  return siteConfig.features;
}

// Hook for SEO configuration
export function useSEO() {
  return siteConfig.seo;
}