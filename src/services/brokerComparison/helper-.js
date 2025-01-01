function addSimilarField(brokers) {
    if (!brokers.length) {
        console.error("No brokers provided.");
        return brokers;
    }

    // Convert Mongoose objects to plain JavaScript objects
    brokers = brokers.map((broker) => broker.toObject ? broker.toObject() : broker);

    // Extract all keys from the first broker's comparison object as reference
    const referenceKeys = Object.keys(brokers[0].comparisons[0]).filter(
        (key) => key !== "_id" && key !== "similar" && key !== "brokerID" // Exclude metadata fields
    );

    // Initialize similar keys array
    const similarKeys = new Set(referenceKeys);

    // Compare across brokers
    referenceKeys.forEach((key) => {
        const firstValue = brokers[0].comparisons[0][key];

        for (let i = 1; i < brokers.length; i++) {
            const currentValue = brokers[i].comparisons[0][key];
            if (
                Array.isArray(firstValue) && Array.isArray(currentValue)
                    ? JSON.stringify(firstValue.sort()) !== JSON.stringify(currentValue.sort())
                    : firstValue !== currentValue
            ) {
                // If any value doesn't match, remove the key from similarKeys
                similarKeys.delete( key);
                break;
            }
        }
    });

    // Add similar field to each broker and remove similar keys from comparisons
    brokers.forEach((broker) => {
        const comparison = broker.comparisons[0];
        comparison.similar = {}; // Add similar field
        [...similarKeys].forEach((key) => {
            comparison.similar[key] = comparison[key]; // Move to similar
            delete comparison[key]; // Remove from main comparison object
        });
    });


    console.log(JSON.stringify(brokers, null, 2));
    return brokers;
}

module.exports = {addSimilarField}

// // Example Usage
// async function processBrokers() {
//     const brokers = await BrokerModel.find(); // Replace BrokerModel with your actual Mongoose model
//     const updatedBrokers = addSimilarField(brokers);
// }
