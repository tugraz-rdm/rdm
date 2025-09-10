// Configuration for TU Graz RDM Events
export const TUGRAZ_CONFIG = {
  // Base URLs
  RDM_BASE_URL: process.env.TUGRAZ_RDM_BASE_URL || 'https://www.tugraz.at/sites/rdm',
  RDM_EVENTS_URL: process.env.TUGRAZ_RDM_EVENTS_URL || 'https://www.tugraz.at/sites/rdm/networks-and-events/meetings-and-events',
  RDM_HOME_URL: process.env.TUGRAZ_RDM_HOME_URL || 'https://www.tugraz.at/sites/rdm/home',
  
  // Cache configuration
  CACHE_TTL_MINUTES: parseInt(process.env.EVENTS_CACHE_TTL_MINUTES || '30'),
  CACHE_FALLBACK_TTL_MINUTES: parseInt(process.env.EVENTS_CACHE_FALLBACK_TTL_MINUTES || '10'),
  
  // API limits
  MAX_EVENTS: parseInt(process.env.EVENTS_MAX_ITEMS || '10'),
  REQUEST_TIMEOUT_MS: parseInt(process.env.EVENTS_REQUEST_TIMEOUT_MS || '10000'),
  
  // Request headers
  USER_AGENT: process.env.EVENTS_USER_AGENT || 'Mozilla/5.0 (compatible; TU-Graz-RDM-App/1.0)',
  
  // Feature flags
  ENABLE_LIVE_EVENTS: process.env.ENABLE_LIVE_EVENTS !== 'false',
  ENABLE_EVENTS_FALLBACK: process.env.ENABLE_EVENTS_FALLBACK !== 'false',
} as const;

// Note: All configuration values have sensible defaults
// so no validation is needed - if URLs are invalid, 
// the fetch operations will handle the errors gracefully

// Helper to get cache TTL in milliseconds
export function getCacheTTL(isFallback = false): number {
  const minutes = isFallback 
    ? TUGRAZ_CONFIG.CACHE_FALLBACK_TTL_MINUTES 
    : TUGRAZ_CONFIG.CACHE_TTL_MINUTES;
  return minutes * 60 * 1000;
}
