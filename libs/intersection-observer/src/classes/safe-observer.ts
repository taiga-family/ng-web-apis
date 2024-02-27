export const SafeObserver =
    typeof IntersectionObserver !== 'undefined'
        ? IntersectionObserver
        : class implements IntersectionObserver {
              public readonly root = null;
              public readonly rootMargin = '';
              public readonly thresholds = [];
              public observe(): void {}
              public unobserve(): void {}
              public disconnect(): void {}
              public takeRecords(): IntersectionObserverEntry[] {
                  return [];
              }
          };
