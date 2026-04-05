export const SafeObserver =
    typeof ResizeObserver === 'undefined'
        ? class implements ResizeObserver {
              public observe(): void {}
              public unobserve(): void {}
              public disconnect(): void {}
          }
        : ResizeObserver;
