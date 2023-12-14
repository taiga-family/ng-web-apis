export const SafeObserver =
    typeof ResizeObserver !== `undefined`
        ? ResizeObserver
        : class implements ResizeObserver {
              observe(): void {}
              unobserve(): void {}
              disconnect(): void {}
          };
