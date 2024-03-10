import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const photo1 = await uploadPhoto();
    const user1 = await createUser();

    return {
      photo: photo1,
      user: user1,
    };
  } catch (e) {
    return {
      photo: null,
      user: null,
    };
  }
}
