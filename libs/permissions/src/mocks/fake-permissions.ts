export class FakePermissions implements Permissions {
    // eslint-disable-next-line @typescript-eslint/require-await
    public async query(_permissionDesc: PermissionDescriptor): Promise<PermissionStatus> {
        throw new Error('Method not implemented.');
    }
}
