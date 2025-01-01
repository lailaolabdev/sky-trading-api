const searchQuery = (req) => {
    const broker1 = req.params.broker1 || '';
    const broker2 = req.params.broker2 || '';
    const broker3 = req.params.broker3 || '';

    const searchQuery = {};

    // Initialize an array for brokers
    const brokers = [];
    if (broker1) brokers.push(broker1);
    if (broker2) brokers.push(broker2);
    if (broker3) brokers.push(broker3);

    // Add condition if brokers are present
    if (brokers.length > 0) {
        searchQuery._id = { $in: brokers };
    }

    return searchQuery;
};

const areBrokersUnique = (req) => {
    if(req.params.broker1 && req.params.broker2 && !req.params.broker3) {
        const brokers = [req.params.broker1, req.params.broker2];
        const uniqueBrokers = new Set(brokers.filter(Boolean)); // Remove empty/null values
        return uniqueBrokers.size === brokers.filter(Boolean).length;
    };

    
    if(req.params.broker1 && req.params.broker2 && req.params.broker3) {
        const brokers = [req.params.broker1, req.params.broker2, req.params.broker3];
        const uniqueBrokers = new Set(brokers.filter(Boolean)); // Remove empty/null values
        return uniqueBrokers.size === brokers.filter(Boolean).length;
    };
};


module.exports = { searchQuery, areBrokersUnique };
