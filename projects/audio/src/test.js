class TestProcessor extends AudioWorkletProcessor {
    process() {
        return true;
    }
}

registerProcessor('test', TestProcessor);
