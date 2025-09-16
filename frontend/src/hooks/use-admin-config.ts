import { useState, useEffect, useCallback } from 'react';
import { siteConfig } from '../config/site-config';
import { themeConfig } from '../config/theme-config';
import { heroData } from '../data/hero-data';
import { aboutData } from '../data/about-data';
import { achievementsData } from '../data/achievements-data';
import { programsData } from '../data/programs-data';
import { historyData } from '../data/history-data';

export interface AdminConfig {
  site: typeof siteConfig;
  theme: typeof themeConfig;
  hero: typeof heroData;
  about: typeof aboutData;
  achievements: typeof achievementsData;
  programs: typeof programsData;
  history: typeof historyData;
}

const STORAGE_KEY = 'whitelabel-admin-config';

export function useAdminConfig() {
  const [config, setConfig] = useState<AdminConfig>({
    site: siteConfig,
    theme: themeConfig,
    hero: heroData,
    about: aboutData,
    achievements: achievementsData,
    programs: programsData,
    history: historyData,
  });

  const [isLoading, setIsLoading] = useState(true);
  const [isDirty, setIsDirty] = useState(false);

  // Load configuration from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsedConfig = JSON.parse(saved);
        setConfig(prev => ({
          ...prev,
          ...parsedConfig,
        }));
      }
    } catch (error) {
      console.error('Error loading admin config:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Save configuration to localStorage
  const saveConfig = useCallback(async () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
      setIsDirty(false);
      return true;
    } catch (error) {
      console.error('Error saving config:', error);
      return false;
    }
  }, [config]);

  // Update configuration
  const updateConfig = useCallback((section: keyof AdminConfig, updates: any) => {
    setConfig(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        ...updates,
      },
    }));
    setIsDirty(true);
  }, []);

  // Update nested configuration
  const updateNestedConfig = useCallback((
    section: keyof AdminConfig, 
    path: string[], 
    value: any
  ) => {
    setConfig(prev => {
      const newConfig = { ...prev };
      let current = newConfig[section] as any;
      
      // Navigate to the nested property
      for (let i = 0; i < path.length - 1; i++) {
        if (!current[path[i]]) {
          current[path[i]] = {};
        }
        current = current[path[i]];
      }
      
      // Set the value
      current[path[path.length - 1]] = value;
      
      return newConfig;
    });
    setIsDirty(true);
  }, []);

  // Reset configuration
  const resetConfig = useCallback(() => {
    setConfig({
      site: siteConfig,
      theme: themeConfig,
      hero: heroData,
      about: aboutData,
      achievements: achievementsData,
      programs: programsData,
      history: historyData,
    });
    setIsDirty(true);
  }, []);

  // Export configuration
  const exportConfig = useCallback(() => {
    const dataStr = JSON.stringify(config, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    const exportFileDefaultName = `whitelabel-config-${new Date().toISOString().split('T')[0]}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  }, [config]);

  // Import configuration
  const importConfig = useCallback((configData: Partial<AdminConfig>) => {
    setConfig(prev => ({
      ...prev,
      ...configData,
    }));
    setIsDirty(true);
  }, []);

  // Apply theme changes to CSS variables
  const applyThemeChanges = useCallback(() => {
    if (typeof document !== 'undefined') {
      const root = document.documentElement;
      const colors = config.theme.colors;
      const typography = config.theme.typography;

      // Apply color variables
      root.style.setProperty('--primary', colors.primary);
      root.style.setProperty('--secondary', colors.secondary);
      root.style.setProperty('--accent', colors.accent);
      root.style.setProperty('--background', colors.background);
      root.style.setProperty('--foreground', colors.foreground);

      // Apply typography variables
      root.style.setProperty('--font-family-primary', typography.fontFamily.primary);
      root.style.setProperty('--font-family-heading', typography.fontFamily.heading);

      // Update document title
      document.title = config.site.seo?.defaultTitle || config.site.name;
    }
  }, [config]);

  // Auto-apply theme changes when config changes
  useEffect(() => {
    if (!isLoading) {
      applyThemeChanges();
    }
  }, [config, isLoading, applyThemeChanges]);

  // Auto-save functionality (optional)
  const enableAutoSave = useCallback((interval: number = 30000) => {
    const autoSaveInterval = setInterval(() => {
      if (isDirty) {
        saveConfig();
      }
    }, interval);

    return () => clearInterval(autoSaveInterval);
  }, [isDirty, saveConfig]);

  return {
    config,
    isLoading,
    isDirty,
    updateConfig,
    updateNestedConfig,
    saveConfig,
    resetConfig,
    exportConfig,
    importConfig,
    applyThemeChanges,
    enableAutoSave,
  };
}

// Type-safe configuration updater utilities
export const configPaths = {
  site: {
    name: ['name'],
    description: ['description'],
    url: ['url'],
    organization: {
      name: ['organization', 'name'],
      shortName: ['organization', 'shortName'],
      establishedYear: ['organization', 'establishedYear'],
      anniversary: ['organization', 'anniversary'],
    },
    contact: {
      address: ['contact', 'address'],
      phone: ['contact', 'phone'],
      email: ['contact', 'email'],
      website: ['contact', 'website'],
    },
    social: {
      facebook: ['social', 'facebook'],
      youtube: ['social', 'youtube'],
      linkedin: ['social', 'linkedin'],
    },
  },
  theme: {
    colors: {
      primary: ['colors', 'primary'],
      secondary: ['colors', 'secondary'],
      accent: ['colors', 'accent'],
      background: ['colors', 'background'],
    },
    typography: {
      primaryFont: ['typography', 'fontFamily', 'primary'],
      headingFont: ['typography', 'fontFamily', 'heading'],
    },
    logo: {
      type: ['logo', 'type'],
      text: ['logo', 'text'],
      src: ['logo', 'src'],
    },
  },
  hero: {
    title: {
      prefix: ['title', 'prefix'],
      highlight: ['title', 'highlight'],
      suffix: ['title', 'suffix'],
      subtitle: ['title', 'subtitle'],
    },
    description: ['description'],
    cta: {
      primaryText: ['cta', 'primary', 'text'],
      primaryHref: ['cta', 'primary', 'href'],
      secondaryText: ['cta', 'secondary', 'text'],
      secondaryHref: ['cta', 'secondary', 'href'],
    },
  },
} as const;