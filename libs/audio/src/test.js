/* eslint-disable @typescript-eslint/explicit-member-accessibility */
class TestProcessor extends AudioWorkletProcessor {
    process() {
        return true;
    }
}

registerProcessor('test', TestProcessor);
