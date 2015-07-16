using System;

public static class AppleStock
{
    public static void Main()
    {
        Console.WriteLine(BestProfit(new int[] {500, 510, 485, 610, 700, 500, 900, 210, 400, 70}));
        Console.WriteLine(BestProfit(new int[] {20, 500, 0, 30, 17, 500, 600, 10, 80, 50}));
        Console.WriteLine(BestProfit(new int[] {400, 380, 260, 250, 200, 180, 150, 120}));
        Console.WriteLine(BestProfit(new int[] {400, 400,400,400,400,400,400,400,400,400}));
    }
    
    public static int BestProfit (int[] prices)
    {
        int cur, early = prices[0], late = prices[1], curDif = late - early, bestDif = curDif;

        for (int i = 2 ; i < prices.Length ; i++)
        {
            cur = prices[i];
            if (cur < early)
            {
                early = cur;
                late = 0;
            } 
            else if (cur > late) 
            {
                late = cur;
                curDif = late - early;
                bestDif = curDif > bestDif ? curDif : bestDif;
            }
            curDif = prices[i] - prices[i-1];
            bestDif = curDif > bestDif ? curDif : bestDif;
        }
        return bestDif;
    }
}
