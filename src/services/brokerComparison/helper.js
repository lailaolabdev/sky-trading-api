const { array } = require("joi");

function arrayHaveSameValues(arr1, arr2) {
    if (arr1.length !== arr2.length) return false; // Different lengths
    // Sort both arrays and compare
    const sortedArr1 = [...arr1].sort();
    const sortedArr2 = [...arr2].sort();
    return sortedArr1.every((value, index) => value === sortedArr2[index]);
  }

function addSimilarField(brokers) {
    console.log({brokers})
    const similarKeys = []; // To store keys with similar values across brokers
    let baseComparisons = brokers[0]?.comparisons[0] || {}; // Use the first broker's comparison as the reference
    baseComparisons = baseComparisons.toObject();

    /// Iterate over all keys in the base comparison object
    Object.keys(baseComparisons).forEach((baseKey) => {
        let isSimilar = true; // Assume all brokers have the same value for this key

        // Compare the current key's value across all brokers
        brokers.slice(1).forEach((broker) => {
            broker.comparisons.forEach((comparison) => {
                // console.log(comparison);
                // Check if the current value matches the base value
                if(Array.isArray(comparison[baseKey])){
                    if (arrayHaveSameValues(comparison[baseKey], baseComparisons[baseKey])) {
                        isSimilar = true; // If a value  match, it's similar
                    }else{
                        isSimilar = false;
                    }
                }else{
                    if(comparison[baseKey] !== baseComparisons[baseKey]) {
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

    console.log({ similarKeys }); // Output the similar keys
    // return similarKeys;
}

module.exports = { addSimilarField };
