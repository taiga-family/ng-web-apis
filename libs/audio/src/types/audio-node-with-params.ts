export type AudioNodeWithParams<K extends string> = AudioNode & Record<K, AudioParam>;
