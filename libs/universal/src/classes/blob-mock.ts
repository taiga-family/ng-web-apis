import {alwaysRejected} from '../utils/functions';

export class BlobMock implements Blob {
    size = 0;
    type = '';
    arrayBuffer = () => alwaysRejected();
    stream = () => new ReadableStream();
    text = () => alwaysRejected();
    slice = () => this;
}
