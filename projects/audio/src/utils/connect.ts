export function connect(
    source?: AudioNode | null,
    destination?: AudioNode | AudioParam | null,
) {
    if (source && destination) {
        // @ts-ignore TS does not have a union override for connect method
        source.connect(destination);
    }
}
