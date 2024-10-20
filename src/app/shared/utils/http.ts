export class HttpUtils {
  public static downloadBlob(blob: Blob, fileName: string) {
    const blobUrl = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = blobUrl;
    anchor.download = fileName;
    anchor.click();
    URL.revokeObjectURL(blobUrl);
  };
}
