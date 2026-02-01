import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import ENV from "#env";

cloudinary.config({
    cloud_name: ENV.CLOUDINARY_CLOUD_NAME,
    api_key: ENV.CLOUDINARY_API_KEY,
    api_secret: ENV.CLOUDINARY_API_SECRET, // Click 'View API Keys' above to copy your API secret
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return;

        // upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
        });

        // file has been uploaded successfully
        console.log("file is uploaded on cloudinary", response.url);

        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath); // remove the locally save remporary file as the upload operation got failed

        return null;
    }
};

export default uploadOnCloudinary;
