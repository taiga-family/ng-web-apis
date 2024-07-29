export const SafeObserver =
    typeof MutationObserver !== `undefined`
        ? MutationObserver
        : class implements MutationObserver {
              observe(): void {}
              disconnect(): void {}
              takeRecords(): MutationRecord[] {
                  return [];
              }
          };
