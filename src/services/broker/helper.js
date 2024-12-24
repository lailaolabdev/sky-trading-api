const brokerModel = require('../../models/brokerModel/index');

// Assuming your model is called `YourModel` and the field you're checking is `field`
const fullRange = Array.from({ length: 10 }, (_, i) => i + 1);  // [1, 2, 3, ..., 10]

async function findMissingNumbers() {
  try {
    // Step 2: Find all distinct values in the 'field' that are between 1 and 10
    const numbersInRange = await brokerModel.distinct('top', {
      top: { $gte: 1, $lte: 10 }
    });

    // Step 3: Find the missing numbers by comparing with full range
    const missingNumbers = fullRange.filter(num => !numbersInRange.includes(num));

    return  missingNumbers;
  } catch (error) {
    console.error('Error fetching numbers:', error);
  }
}

module.exports = findMissingNumbers;