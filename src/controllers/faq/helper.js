const searchQuery = (req) => {

    const search = req.query.search || '';
    const date = req.query.date || '';

    let searchQuery = {};

    if (search) {
        searchQuery = {$or:[
            { type: { $regex: new RegExp(search, 'i') } },
            { typeEN: { $regex: new RegExp(search, 'i') } },
            // { questionAnswer: { $regex: new RegExp(search, 'i') } }
        ]};
    }

    if (date) {
        // Parse the input date as UTC (not local time)
        const inputDate = new Date(date); // Assume `date` is "2025-01-14"

        // Calculate start and end of the day in UTC
        const startOfDay = new Date(Date.UTC(inputDate.getUTCFullYear(), inputDate.getUTCMonth(), inputDate.getUTCDate(), 0, 0, 0, 0));
        const endOfDay = new Date(Date.UTC(inputDate.getUTCFullYear(), inputDate.getUTCMonth(), inputDate.getUTCDate(), 23, 59, 59, 999));

        // Set the filter query
        searchQuery.createdAt = {
        $gte: startOfDay,
        $lt: endOfDay,
        };
    }
    return searchQuery;
}

module.exports = searchQuery;