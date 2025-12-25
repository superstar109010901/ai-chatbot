/**
 * File validation utilities for chat attachments
 */

export const ALLOWED_FILE_TYPES = {
  images: ['.jpg', '.jpeg', '.png', '.gif'],
  documents: ['.txt', '.rtf', '.xlsx', '.docx', '.pdf'],
  media: ['.mp3', '.mp4'],
};

export const DISALLOWED_FILE_TYPES = ['.exe', '.dmg', '.mov', '.rar', '.zip'];

export const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB in bytes

export interface FileValidationResult {
  isValid: boolean;
  error?: string;
}

/**
 * Get file extension from filename
 */
export const getFileExtension = (filename: string): string => {
  const lastDot = filename.lastIndexOf('.');
  if (lastDot === -1) return '';
  return filename.substring(lastDot).toLowerCase();
};

/**
 * Check if file type is allowed
 */
export const isFileTypeAllowed = (filename: string): boolean => {
  const extension = getFileExtension(filename);
  
  // Check if it's in the disallowed list
  if (DISALLOWED_FILE_TYPES.includes(extension)) {
    return false;
  }
  
  // Check if it's in any allowed category
  const allAllowed = [
    ...ALLOWED_FILE_TYPES.images,
    ...ALLOWED_FILE_TYPES.documents,
    ...ALLOWED_FILE_TYPES.media,
  ];
  
  return allAllowed.includes(extension);
};

/**
 * Validate file size
 */
export const isFileSizeValid = (fileSize: number): boolean => {
  return fileSize <= MAX_FILE_SIZE;
};

/**
 * Validate file (type and size)
 */
export const validateFile = (file: File): FileValidationResult => {
  // Check file type
  if (!isFileTypeAllowed(file.name)) {
    const extension = getFileExtension(file.name);
    if (DISALLOWED_FILE_TYPES.includes(extension)) {
      return {
        isValid: false,
        error: `File type ${extension} is not allowed. Disallowed formats: ${DISALLOWED_FILE_TYPES.join(', ')}`,
      };
    }
    return {
      isValid: false,
      error: `File type ${extension} is not supported. Supported formats: images (.jpg, .jpeg, .png, .gif), documents (.txt, .rtf, .xlsx, .docx, .pdf), media (.mp3, .mp4)`,
    };
  }
  
  // Check file size
  if (!isFileSizeValid(file.size)) {
    const maxSizeMB = MAX_FILE_SIZE / (1024 * 1024);
    return {
      isValid: false,
      error: `File size exceeds the maximum limit of ${maxSizeMB} MB`,
    };
  }
  
  return { isValid: true };
};

/**
 * Format file size for display
 */
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
};

/**
 * Get file type category
 */
export const getFileCategory = (filename: string): 'image' | 'document' | 'media' | 'unknown' => {
  const extension = getFileExtension(filename);
  
  if (ALLOWED_FILE_TYPES.images.includes(extension)) return 'image';
  if (ALLOWED_FILE_TYPES.documents.includes(extension)) return 'document';
  if (ALLOWED_FILE_TYPES.media.includes(extension)) return 'media';
  
  return 'unknown';
};

