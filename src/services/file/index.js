const { v4: uuidv4 } = require('uuid');
const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

// Initialize S3 Client
const s3 = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_KEY,
    }
});

// Function to Generate Presigned URL
const getSingedUrl = async (fileType) => {
    const _splitFileType = fileType.split("/");
    const filename = `${uuidv4()}.${_splitFileType[1]}`;

    const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: "images/" + filename,
    };

    try {
        // Generate the presigned URL for PUT operation
        const url = await getSignedUrl(s3, new GetObjectCommand(params), { expiresIn: 60 * 5 });

        console.log(url);
        const parts = url.split("?");
        const baseUrl = parts[0];
        console.log("Base URL:", baseUrl);

        return {
            message: "GET_PRESIGNED_URL_SUCCESSFUL",
            data: { url: baseUrl, filename },
        };
    } catch (err) {
        console.log("Error:", err);
        return {
            message: "GET_PRESIGNED_URL_FAIL",
            data: null,
        };
    }
};

module.exports = { getSingedUrl };
