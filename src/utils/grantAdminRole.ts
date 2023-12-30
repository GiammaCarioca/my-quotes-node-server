import { getAuth } from 'firebase-admin/auth';

const customClaims = {
  admin: true,
};

export async function grantAdminRole(uid: string) {
  try {
    await getAuth().setCustomUserClaims(uid, customClaims);

    await getAuth()
      .getUser(uid)
      .then(userRecord => {
        console.log('Custom claims: ', userRecord?.customClaims);
      });

    return;
  } catch (error) {
    console.log(error);
  }
}
