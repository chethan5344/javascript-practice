function coinChange(coins, amount) {
    // Input validation
    if (!Array.isArray(coins) || coins.length === 0 || amount < 0) {
        return -1; // Invalid input
    }
    
    // Early exit for zero amount
    if (amount === 0) return 0;

    const dp = new Array(amount + 1).fill(amount + 1);
    dp[0] = 0;

    // Iterate through each coin
    for (const coin of coins) {
        // Update dp array for each amount starting from the coin value
        for (let index = coin; index <= amount; index++) {
            dp[index] = Math.min(dp[index], 1 + dp[index - coin]);
        }
    }

    // Return the result
    return dp[amount] === amount + 1 ? -1 : dp[amount];
}

const result = coinChange([1, 3, 4, 5], 7);
console.log(result);
