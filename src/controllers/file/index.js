const {getSingedUrl} = require('../../services/file')
const imageValidator = require('../../validators/fileValidator')

const getPresignedUrl = async (req, res) => {
    try {
        const imageValidation = imageValidator(req);

        if(!imageValidation.isInvalid){
            return res.status(400).json({message: imageValidation.message})
        }

        let _presignedUrl = await getSingedUrl(req.body.type);
        if(!_presignedUrl.data){
            return res.status(400).json({message: _presignedUrl.message})
        }

        return res.status(200).json({message: "GET_PRESIGNED_URL_SUCCESSFUL", data: _presignedUrl.data});
    } catch (error) {
        console.log("error: ", error)
        return res.status(500).json({
            message: "INTERNAL_SERVER_ERROR",
            error: error.toString()
        })
    }
}

module.exports = {getPresignedUrl}