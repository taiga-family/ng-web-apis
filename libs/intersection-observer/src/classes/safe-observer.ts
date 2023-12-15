export const SafeObserver =
    typeof IntersectionObserver !== `undefined`
        ? IntersectionObserver
        : class implements IntersectionObserver {
              readonly root = null;
              readonly rootMargin = ``;
              readonly thresholds = [];
              observe(): void {}
              unobserve(): void {}
              disconnect(): void {}
              takeRecords(): IntersectionObserverEntry[] {
                  return [];
              }
          };
