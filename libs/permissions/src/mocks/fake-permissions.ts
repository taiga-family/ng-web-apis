export class FakePermissions implements Permissions {
    query(_permissionDesc: PermissionDescriptor): Promise<PermissionStatus> {
        throw new Error('Method not implemented.');
    }
}
