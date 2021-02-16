declare module 'quad-indices' {
    type NumericArray =
        Float32Array |
        Float64Array |
        Uint8ClampedArray |
        Uint8Array |
        Uint16Array |
        Uint32Array |
        Int8Array |
        Int16Array |
        Int32Array |
        Array<number>;

    interface QuadOptions {
        /** default: false */
        clockwise?: boolean;
        /** default: 'uint16' */
        type?: string;
        /** default: 1 */
        count?: number;
        /** default: 0 */
        start?: number;
    }

    function createQuadElements(opt?: QuadOptions): NumericArray;
    function createQuadElements(array: NumericArray, opt?: QuadOptions): NumericArray;

    export default createQuadElements;
}
