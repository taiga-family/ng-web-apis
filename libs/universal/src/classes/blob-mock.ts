import {alwaysRejected} from '../utils/functions';

export class BlobMock implements Blob {
    size = 0;
    type = ``;
    arrayBuffer = async (): Promise<any> => alwaysRejected();
    stream = (): ReadableStream => new ReadableStream();
    text = async (): Promise<any> => alwaysRejected();
    slice = (): this => this;
}
