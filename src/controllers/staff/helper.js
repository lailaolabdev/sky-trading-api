const searchQuery = (req) => {

    const userName = req.query.userName || '';
    const date = req.query.date || '';

    const searchQuery = {};

    if (userName) {
        searchQuery.userName = { $regex: new RegExp(userName, 'i') };
    }

    if (date) {
        const now = new Date(date);

        // Set the start of the day in UTC
        const startOfDay = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 0, 0, 0, 0));

        // Set the end of the day in UTC
        const endOfDay = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 23, 59, 59, 999));

        searchQuery.createdAt = {
            $gte: startOfDay,
            $lt: endOfDay
        };
    }
    return searchQuery;
}

module.exports = {searchQuery}