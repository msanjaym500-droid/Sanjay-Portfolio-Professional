import { useSyncExternalStore } from 'react';

const emptySubscribe = () => () => {};

/**
 * SSR-safe hook that returns false on the server and during initial hydration,
 * and true immediately after mounting on the client.
 * Uses useSyncExternalStore to eliminate hydration mismatch and setState-in-effect lint errors.
 */
export function useIsMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}
