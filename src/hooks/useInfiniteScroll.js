import { useEffect, useRef, useCallback } from 'react';
 
const useInfiniteScroll = (callback, isLoading, hasMore) => {
  const observerRef = useRef(null); 
  const loadingTriggerRef = useRef(null);

  
  const handleObserver = useCallback(
    (entries) => {
      const [target] = entries;
      if (target.isIntersecting && !isLoading && hasMore) {
        callback(); 
      }
    },
    [callback, isLoading, hasMore]
  );
  
  useEffect(() => {
    // Create Intersection Observer
    const option = {
      root: null, 
      rootMargin: '20px', 
      threshold: 0 
    };

    observerRef.current = new IntersectionObserver(handleObserver, option);

    // Observe the loading trigger element
    const currentTrigger = loadingTriggerRef.current;
    if (currentTrigger) {
      observerRef.current.observe(currentTrigger);
    }

    // Cleanup prevents m/m leaks(comp removed from dom and destroyed)
    return () => {
      if (observerRef.current && currentTrigger) {
        observerRef.current.unobserve(currentTrigger);
      }
    };
  }, [handleObserver]);

  return loadingTriggerRef;
};

export default useInfiniteScroll;
