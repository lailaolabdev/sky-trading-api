const searchQuery = (req) => {

    const component = req.query.component || '';

    const searchQuery = {};

    if (component) {
        searchQuery.component = { $regex: new RegExp(component, 'i') };
    }
    return searchQuery;
}

module.exports = {searchQuery}