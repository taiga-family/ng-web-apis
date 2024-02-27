export const SafeObserver =
    typeof MutationObserver !== 'undefined'
        ? MutationObserver
        : class implements MutationObserver {
              public observe(): void {}
              public disconnect(): void {}
              public takeRecords(): MutationRecord[] {
                  return [];
              }
          };
