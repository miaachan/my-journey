from typing import List
import sys


class Solution:
    def maxProfit(self, prices: List[int]) -> int:

        hold = [0] * (len(prices) + 1)
        hold[0] = -sys.maxsize - 1
        sold = [0] * (len(prices) + 1)
        rest = [0] * (len(prices) + 1)

        for i in range(len(prices)):
            hold[i + 1] = max(hold[i], rest[i] - prices[i])
            sold[i + 1] = hold[i] + prices[i]
            rest[i + 1] = max(rest[i], sold[i])
            pass

        return max(sold[len(prices)], rest[len(prices)])


d = Solution()
d.maxProfit([1, 2, 3, 0, 2])
