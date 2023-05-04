export const SAMPLE = `import { PermissionsService } from '@ng-web-apis/permissions';

@Component({
  selector: 'main',
  template: \`
    <h2>Geolocation state: {{ geolocationState$ | async }}</h2>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  geolocationState$ = this.permissionsService.state('geolocation');

  constructor(
    private readonly permissionsService: PermissionsService,
  ) {}
}
`;
