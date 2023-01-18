const fileExtensions = new Map<string, string>([
  ['gif', 'image'],
  ['jpeg', 'image'],
  ['jpg', 'image'],
  ['png', 'image'],
  ['mp4', 'video'],
]);

function getFileExtension(media: string): string | undefined {
  return media.split('.').pop()?.toLowerCase();
}

export function defineMediaType(media: string) {
  const ext = getFileExtension(media);
  if (ext && fileExtensions.has(ext)) {
    return fileExtensions.get(ext);
  }
  return 'unknown';
}
