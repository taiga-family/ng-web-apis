export class FakePermissions implements Permissions {
    // eslint-disable-next-line @typescript-eslint/require-await
    async query(_permissionDesc: PermissionDescriptor): Promise<PermissionStatus> {
        throw new Error('Method not implemented.');
    }
}
