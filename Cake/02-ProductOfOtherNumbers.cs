using System;

public static class ProductOfOtherNumbers
{
    public static void Main()
    {
        int[] res = CalcProds(new int[] {1,7,3,4});
        foreach (int num in res)
        {
            Console.WriteLine(num);
        }
    }
    
    public static int[] CalcProds (int[] nums)
    {
        int[] result = new int[nums.Length];

        for (int i = 0 ; i < result.Length ; i++)
        {
            result[i] = i == 0 ? 1 : result[i-1] * nums[i-1];
        }
        int runningProd = 1;
        for (int j = result.Length - 2 ; j >= 0 ; j--)
        {
            runningProd *= nums[j+1];
            result[j] *= runningProd;
        }
        return result;
    }
}
