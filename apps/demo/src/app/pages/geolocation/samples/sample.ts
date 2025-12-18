export const SAMPLE = `import {WaGeolocationService} from '@ng-web-apis/geolocation';

// ...

constructor(private readonly geolocation$: WaGeolocationService) {}

getPosition() {
  geolocation$.subscribe((position) => {
     doSomethingWithPosition(position);
  });
}`;
