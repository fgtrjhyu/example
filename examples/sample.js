/**
 * Sample JavaScript File for GitHub Learning Repository
 * 
 * This is an example JavaScript file to demonstrate:
 * - Code structure
 * - Documentation
 * - Version control best practices
 */

/**
 * Generate a greeting message
 * @param {string} name - The name to greet
 * @returns {string} A greeting message
 */
function greet(name) {
    return `Hello, ${name}! Welcome to GitHub operations.`;
}

/**
 * Calculate the sum of two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The sum of a and b
 */
function calculateSum(a, b) {
    return a + b;
}

/**
 * Main function to demonstrate the script
 */
function main() {
    console.log(greet("GitHub Learner"));
    
    const result = calculateSum(5, 7);
    console.log(`The sum of 5 and 7 is: ${result}`);
    
    console.log("\n✅ Sample script executed successfully!");
}

// Run main function if this script is executed directly
if (require.main === module) {
    main();
}

// Export functions for use in other modules
module.exports = {
    greet,
    calculateSum,
    main
};
