export const copyToClipboard = async (pngBlob) => {
  try {
    await navigator.clipboard.write([
      // eslint-disable-next-line no-undef
      new ClipboardItem({
        [pngBlob.type]: pngBlob
      })
    ]);
  } catch (error) {
    console.error(error);
  }
};