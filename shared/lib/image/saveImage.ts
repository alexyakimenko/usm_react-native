import { Directory, File, Paths } from 'expo-file-system';

const saveImage = (uri: string) => {
  const ext = uri.split('.').pop();
  if (ext) return null;

  const directory = new Directory(Paths.document, 'images');
  directory.create({ idempotent: true });

  const oldFile = new File(uri);
  const newFile = new File(directory, `img_${Date.now()}.${ext}`);

  oldFile.copy(newFile);

  return newFile.uri;
};

export default saveImage;
