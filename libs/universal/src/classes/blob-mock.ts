import {alwaysRejected} from '../utils/functions';

export class BlobMock implements Blob {
    public size = 0;
    public type = '';
    public arrayBuffer = async (): Promise<any> => alwaysRejected();
    public stream = (): ReadableStream => new ReadableStream();
    public text = async (): Promise<any> => alwaysRejected();
    public slice = (): this => this;
}
