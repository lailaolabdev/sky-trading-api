const { getStaffService } = require("../../services/staff");
const getUser = async (req, res) => {
    const staffInfo = await getStaffService("stff001");
    return res.status(200).json({ staffInfo });
}; 


module.exports = { getUser };