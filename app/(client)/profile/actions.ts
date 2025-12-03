// 'use server';

// import { getCurrentUserFromServer } from "@/context/actions";
// import { Profile, User } from "@/firebase/models";
// import { firestoreServer } from "@/firebase/server";
// import { deleteImageByUrl, uploadImage } from "@/lib/cloudnary";
// import { revalidatePath } from "next/cache";



// export async function createProfileWithImages(
//   profile: Profile,
//   imageFile?: File,
//   bannerFile?: File
// ): Promise<string> {

//    const user = await getCurrentUserFromServer();

//   if (!user) throw new Error("User not authenticated");

//   const userId = user.id;
//     const userx = await getUserById(userId)
//   if (userx != null) {
//      if ((userx.numOfProfiles ?? 0)>=userx.maxProfiles) {
//       return "d";
//      }
//      else{
//  profile.userId = userId;
//   if (imageFile) {
//     const { url } = await uploadImage(imageFile, 'profiles');
//     profile.image = url;
//   }
//   if (bannerFile) {
//     const { url } = await uploadImage(bannerFile, 'profiles');
//     profile.banner = url;
//   }
//   const safeData = JSON.parse(
//             JSON.stringify(profile, (key, value) =>
//               value instanceof Date ? value.toISOString() : value
//             )
//           );
//   const ref = await firestoreServer.collection('profiles').add(safeData);
//   await ref.update({ id: ref.id });

//     // تحديث عدد البروفايلات للمستخدم
//   await updateUser(profile.userId, {
//    numOfProfiles: (userx.numOfProfiles ?? 0) + 1,
//   });
//   return ref.id;
//      }

//   }else{
//      return "n";
//   }

 
 
  




// }
// async function updateUser(userId: string, data: Partial<User>) {
//   await firestoreServer.collection("users").doc(userId).update(data);
// }

// // جلب بيانات مستخدم
//  async function getUserById(userId: string): Promise<User | null> {
//   const doc = await firestoreServer.collection("users").doc(userId).get();
//   return doc.exists
//     ? (convertTimestampsToPlain({ id: doc.id, ...doc.data() }) as User)
//     : null;
// }
// // تحديث بروفايل (بيانات + صور)
// export async function updateProfileWithImages(
//   profileId: string,
//   data: Partial<Profile>,
//   newImageFile?: File,
//   newBannerFile?: File
// ) {
//   const docRef = firestoreServer.collection("profiles").doc(profileId);
//   const oldDoc = await docRef.get();
//   if (!oldDoc.exists) throw new Error("Profile not found");
 
//   const oldData = oldDoc.data() as Profile;
//   const user = await getCurrentUserFromServer();
//   if (oldData.userId !== user?.id) {
//     throw new Error("Unauthorized access");

//   }

//   if (newImageFile) {
//     if (oldData.image) await deleteImageByUrl(oldData.image);
   
//     const { url } = await uploadImage(newImageFile, "profiles");
//     data.image = url;
//   }

//   if (newBannerFile) {
//     if (oldData.banner) await deleteImageByUrl(oldData.banner);
//     const { url } = await uploadImage(newBannerFile, "profiles");
//     data.banner = url;
//   }
//   const safeData = JSON.parse(
//             JSON.stringify(data, (key, value) =>
//               value instanceof Date ? value.toISOString() : value
//             )
//           );
//   await docRef.update(safeData);
// }

// // جلب بيانات مستخدم
// export async function getProfileById(profileId: string): Promise<Profile | null> {
//   const doc = await firestoreServer.collection("profiles").doc(profileId).get();
//   return doc.exists
//     ? (convertTimestampsToPlain({ id: doc.id, ...doc.data() }) as Profile)
//     : null;
// }

// // ==========================
// // ✅ Utility Function لتحويل Timestamps
// // ==========================
// function convertTimestampsToPlain(obj: any) {
//   if (!obj || typeof obj !== "object") return obj;

//   for (const key in obj) {
//     if (obj[key]?.toDate) {
//       obj[key] = obj[key].toDate().toISOString();
//     } else if (typeof obj[key] === "object") {
//       obj[key] = convertTimestampsToPlain(obj[key]);
//     }
//   }
//   return obj;
// }

// export async function isFreeUser(): Promise<boolean> {
 
//   const user = await getCurrentUserFromServer();

//   if (!user) throw new Error("User not authenticated");

//   const userId = user.id;
//   const userx = await getUserById(userId);
//   if (userx) {
//     const isfree = userx.plan=="الخطة المجانية";
// return isfree;

//   }else{return true}

// }




