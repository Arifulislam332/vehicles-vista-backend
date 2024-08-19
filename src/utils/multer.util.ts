import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { Readable } from "stream";

const storage = multer.memoryStorage();

export const upload = multer({
  storage,
  limits: {
    fieldSize: 5 * 1024 * 1024, //5mb
  },
});

export const uploadImages = async (
  files: Express.Multer.File[]
): Promise<string[]> => {
  const uploadPromises = files.map((file) => {
    return new Promise<string>((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: "uploads" },
        (error, result) => {
          if (error) reject(error);
          else if (result?.secure_url) resolve(result.secure_url);
          else reject(new Error("Upload failed: No secure URL returned"));
        }
      );
      const stream = Readable.from(file.buffer);
      stream.pipe(uploadStream);
    });
  });

  return Promise.all(uploadPromises);
};
