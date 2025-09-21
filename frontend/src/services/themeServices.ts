// NTK2/frontend/src/services/themeService.ts
import api from '../utils/api';

// Định nghĩa kiểu dữ liệu cho Theme để nhất quán
export interface Theme {
  [key: string]: any;
}

/**
 * Lấy cấu hình theme hiện tại từ server.
 * @returns Promise chứa dữ liệu theme.
 */
export const getTheme = async (): Promise<Theme> => {
  try {
    const response = await api.get('/themes');
    return response.data;
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu theme:', error);
    throw error;
  }
};

/**
 * Cập nhật cấu hình theme trên server.
 * @param themeData - Dữ liệu theme mới cần cập nhật.
 * @returns Promise chứa dữ liệu theme đã được cập nhật.
 */
export const updateTheme = async (themeData: Theme): Promise<Theme> => {
  try {
    const response = await api.post('/themes', themeData);
    return response.data;
  } catch (error) {
    console.error('Lỗi khi cập nhật theme:', error);
    throw error;
  }
};

/**
 * Yêu cầu server reset cấu hình theme về mặc định.
 * @returns Promise chứa thông báo từ server.
 */
export const resetThemeAPI = async (): Promise<{ message: string }> => {
  try {
    const response = await api.delete('/themes');
    return response.data;
  } catch (error) {
    console.error('Lỗi khi reset theme:', error);
    throw error;
  }
};