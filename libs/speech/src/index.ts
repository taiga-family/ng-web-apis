/**
 * Public API Surface of @ng-web-apis/speech
 */
// Speech Synthesis
export * from './modules/speech-synthesis/speech-synthesis.module';
export * from './modules/speech-synthesis/text-to-speech.directive';
export * from './modules/speech-synthesis/utterance.pipe';

// Interfaces
export * from './interfaces/speech-synthesis-utterance-options';

// Operators
export * from './operators/confidence-above';
export * from './operators/continuous';
export * from './operators/final';
export * from './operators/first-alternative';
export * from './operators/skip-until-said';
export * from './operators/take-until-said';

// Services
export * from './services/speech-recognition.service';

// Tokens
export * from './tokens/speech-recognition-max-alternatives';
export * from './tokens/speech-recognition-support';
export * from './tokens/speech-synthesis-support';
export * from './tokens/speech-synthesis-voices';

// Utils
export * from './utils/is-said';
