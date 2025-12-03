"use server";

import { v2 as cloudinary } from "cloudinary";

// =============================
// 1) إعداد Cloudinary
// =============================
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

// =============================
// 2) نوع الفولدرات الممكنة
// =============================

// =============================
// 3) رفع صورة جديدة
// =============================
export async function uploadImage(
  file: File,
  isProfile: boolean
): Promise<{ url: string; public_id: string }> {
  try {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const result: any = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            folder: isProfile ? process.env.CLOUDINARY_UPLOAD_PROFILE_FOLDER : process.env.CLOUDINARY_UPLOAD_ITEMS_FOLDER,
            resource_type: "image",
            type: "private",
            access_mode: "authenticated",
            eager: [{ quality: "auto", fetch_format: "auto" }], // تحسين تلقائي
          },
          (error, res) => (error ? reject(error) : resolve(res))
        )
        .end(buffer);
    });

    return {
      url: result.secure_url,
      public_id: result.public_id,
    };
  } catch (error) {
    console.error("❌ Error uploading image:", error);
    throw error;
  }
}

// =============================
// 4) استبدال صورة قديمة بجديدة
// =============================
export async function replaceImage(
  oldPublicId: string | null,
  newFile: File,
  isProfile: boolean
): Promise<{ url: string; public_id: string }> {
  try {
    if (oldPublicId) {
      await cloudinary.uploader.destroy(oldPublicId, { type: "private" });
    }
    return await uploadImage(newFile, isProfile);
  } catch (error) {
    console.error("❌ Error replacing image:", error);
    throw error;
  }
}

// =============================
// 5) حذف صورة واحدة
// =============================

export async function deleteImage(publicId: string): Promise<boolean> {
  try {
    const res = await cloudinary.uploader.destroy(publicId, { type: "private" });
    return res.result === "ok";
  } catch (error) {
    console.error("❌ Error deleting image:", error);
    return false;
  }
}

// =============================
// 6) حذف عدة صور
// =============================
export async function deleteImages(publicIds: string[]): Promise<boolean> {
  try {
    const res = await cloudinary.api.delete_resources(publicIds, { type: "private" });
    return !!res;
  } catch (error) {
    console.error("❌ Error deleting multiple images:", error);
    return false;
  }
}

// =============================
// 7) جلب رابط صورة خاصة (Signed URL)
// =============================
export async function getPrivateImage(publicId: string, expiresIn = 7200): Promise<string> {
  try {
    return cloudinary.url(publicId, {
      type: "authenticated",
      sign_url: true,
      secure: true,
      expires_at: Math.floor(Date.now() / 1000) + expiresIn,
    });
  } catch (error) {
    console.error("❌ Error generating signed URL:", error);
    throw error;
  }
}

