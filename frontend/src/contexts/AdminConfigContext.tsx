import React, { createContext, useContext, ReactNode } from 'react';
import { useAdminConfig, AdminConfig } from '../hooks/use-admin-config';

interface AdminConfigContextType {
  config: AdminConfig;
  isLoading: boolean;
  isDirty: boolean;
  updateConfig: (section: keyof AdminConfig, updates: any) => void;
  updateNestedConfig: (section: keyof AdminConfig, path: string[], value: any) => void;
  saveConfig: () => Promise<boolean>;
  resetConfig: () => void;
  exportConfig: () => void;
  importConfig: (configData: Partial<AdminConfig>) => void;
  applyThemeChanges: () => void;
  enableAutoSave: (interval?: number) => () => void;
}

const AdminConfigContext = createContext<AdminConfigContextType | undefined>(undefined);

interface AdminConfigProviderProps {
  children: ReactNode;
}

export function AdminConfigProvider({ children }: AdminConfigProviderProps) {
  const adminConfig = useAdminConfig();

  return (
    <AdminConfigContext.Provider value={adminConfig}>
      {children}
    </AdminConfigContext.Provider>
  );
}

export function useAdminConfigContext() {
  const context = useContext(AdminConfigContext);
  if (context === undefined) {
    throw new Error('useAdminConfigContext must be used within an AdminConfigProvider');
  }
  return context;
}

// Convenience hooks for specific sections
export function useSiteConfig() {
  const { config } = useAdminConfigContext();
  return config.site;
}

export function useThemeConfig() {
  const { config } = useAdminConfigContext();
  return config.theme;
}

export function useHeroData() {
  const { config } = useAdminConfigContext();
  return config.hero;
}

export function useAboutData() {
  const { config } = useAdminConfigContext();
  return config.about;
}

export function useAchievementsData() {
  const { config } = useAdminConfigContext();
  return config.achievements;
}

export function useProgramsData() {
  const { config } = useAdminConfigContext();
  return config.programs;
}

export function useHistoryData() {
  const { config } = useAdminConfigContext();
  return config.history;
}