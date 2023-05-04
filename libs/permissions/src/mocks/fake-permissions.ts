export class FakePermissions implements Permissions {
    query(
        _permissionDesc:
            | PermissionDescriptor
            | DevicePermissionDescriptor
            | MidiPermissionDescriptor
            | PushPermissionDescriptor,
    ): Promise<PermissionStatus> {
        throw new Error('Method not implemented.');
    }
}
