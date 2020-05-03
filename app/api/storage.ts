import { storage } from 'firebase';
import { v4 as uuidv4 } from 'uuid';
import { extension } from 'mime-types';
import { assertLoggedIn } from './users';

// Updates load a file under a random name. Returns the file path
export async function uploadImage(file: File): Promise<string> {
  const uid = assertLoggedIn();
  const filePath = `${uid}/${uuidv4()}.${extension(file.type)}`;
  return storage()
    .ref()
    .child(filePath)
    .put(file)
    .then(() => filePath);
}

export async function removeImage(filePath: string): Promise<void> {
  storage()
    .ref()
    .child(filePath)
    .delete();
}
