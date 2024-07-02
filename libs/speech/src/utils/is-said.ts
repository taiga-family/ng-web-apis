export function isSaid(phrase: string): (results: SpeechRecognitionResult[]) => boolean {
    const lowercased = phrase.toLowerCase().trim();

    return (results) =>
        !!results.find(
            (result) =>
                result.isFinal &&
                result[0]?.transcript.toLowerCase().trim() === lowercased,
        );
}
