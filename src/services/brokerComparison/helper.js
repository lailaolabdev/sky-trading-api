// function to check is the array have the same value or not
function arrayHaveSameValues(arr1, arr2) {
    if (arr1.length !== arr2.length) return false; // Different lengths
    // Sort both arrays and compare
    const sortedArr1 = [...arr1].sort();
    const sortedArr2 = [...arr2].sort();
    return sortedArr1.every((value, index) => value === sortedArr2[index]);
  }

const addSimilarField = (brokers) =>{
    const similarKeys = []; // To store keys with similar values across brokers
    const brokerFormat = [];
    let baseComparisons = brokers[0]?.comparisons[0] || {}; // Use the first broker's comparison as the reference
    // baseComparisons = baseComparisons.toObject();

    /// Iterate over all keys in the base comparison object
    Object.keys(baseComparisons).forEach((baseKey) => {
        let isSimilar = true; // Assume all brokers have the same value for this key

        // Compare the current key's value across all brokers
        brokers.slice(1).forEach((broker) => {
            broker.comparisons.forEach((comparison) => {
                // Check if the current value matches the base value
                if(Array.isArray(comparison[baseKey])){
                    if (arrayHaveSameValues(comparison[baseKey], baseComparisons[baseKey]) && comparison[baseKey] != "__v") {
                        isSimilar = true; // If a value  match, it's similar
                    }else{
                        isSimilar = false;
                    }
                }else{
                    if(comparison[baseKey] !== baseComparisons[baseKey] || comparison[baseKey] == "__v") {
                        isSimilar = false; // If a value doesn't match, it's not similar
                    }
                };
            });
        });

        // If the value for this key is similar across all brokers, add the key to similarKeys
        if (isSimilar) {
            similarKeys.push(baseKey);
        }
    });


    /// To format the broker data with the similar field inside the comparisons
    brokers.forEach((broker) => {
        const brokerComparinson = broker.comparisons[0];
        Object.entries(brokerComparinson).forEach(([comparisonKey, comparisonValue]) => {
            similarKeys.forEach((key) => {
                if(comparisonKey == key){
                    broker.comparisons[0].similar[comparisonKey] = comparisonValue;
                    delete broker.comparisons[0][comparisonKey];
                }
            })
        })
        brokerFormat.push(broker);
    });
    return brokerFormat;
};

module.exports = {addSimilarField}