export const SAMPLE = `import {GeolocationService} from '@ng-web-apis/geolocation';

// ...

constructor(private readonly geolocation$: GeolocationService) {}

getPosition() {
  geolocation$.subscribe((position) => {
     doSomethingWithPosition(position);
  });
}`;
