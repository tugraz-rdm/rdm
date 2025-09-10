// Simple in-memory cache for events
interface CachedEvents {
  data: any[];
  timestamp: number;
  ttl: number; // Time to live in milliseconds
}

class EventsCache {
  private cache: Map<string, CachedEvents> = new Map();
  private defaultTTL = 30 * 60 * 1000; // 30 minutes

  set(key: string, data: any[], ttl?: number): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl: ttl || this.defaultTTL,
    });
  }

  get(key: string): any[] | null {
    const cached = this.cache.get(key);
    
    if (!cached) {
      return null;
    }

    // Check if cache has expired
    if (Date.now() - cached.timestamp > cached.ttl) {
      this.cache.delete(key);
      return null;
    }

    return cached.data;
  }

  clear(): void {
    this.cache.clear();
  }

  has(key: string): boolean {
    const cached = this.cache.get(key);
    if (!cached) return false;
    
    // Check if still valid
    if (Date.now() - cached.timestamp > cached.ttl) {
      this.cache.delete(key);
      return false;
    }
    
    return true;
  }
}

export const eventsCache = new EventsCache();

