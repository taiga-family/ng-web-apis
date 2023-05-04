export interface SpeechSynthesisUtteranceOptions {
    readonly lang?: string;
    readonly pitch?: number;
    readonly rate?: number;
    readonly voice?: SpeechSynthesisVoice | null;
    readonly volume?: number;
}
