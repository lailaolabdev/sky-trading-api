const searchQuery = (req) => {

    const search = req.query.search || '';
    const date = req.query.date || '';

    const searchQuery = {};

    if (search) {
        searchQuery.$or = [
            { userName: { $regex: new RegExp(search, 'i') } },
            { userNameEN: { $regex: new RegExp(search, 'i') } },
            { reviews: { $regex: new RegExp(search, 'i') } }
        ];
    }

    if (date) {
        const targetDate = new Date(date);

        // Set the time to start of the day and end of the day
        const startOfDay = new Date(targetDate.setHours(0, 0, 0, 0));
        const endOfDay = new Date(targetDate.setHours(23, 59, 59, 999));

        searchQuery.createdAt = {
            $gte: startOfDay,  
            $lt: endOfDay     
        };
    }
    return searchQuery;
}

module.exports = searchQuery;