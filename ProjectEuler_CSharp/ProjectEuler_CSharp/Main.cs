using System;
using System.Collections.Generic;

namespace ProjectEuler_CSharp
{
	class MainClass
	{
		public static void Main (string[] args)
		{
			Check_1_Thru_10 ();
//            Console.WriteLine ("009:  {0}", Problems_1_Thru_10.);
		}
		private static void Check_1_Thru_10 ()
		{
			Console.WriteLine ("001: Sum should equal 233168: {0}", Problems_1_Thru_10.Multiples3and5 () == 233168);
			Console.WriteLine ("002: Sum should equal 4613732: {0}", Problems_1_Thru_10.EvenFib () == 4613732);
            Console.WriteLine ("003: Largest Prime of: {0} is {1}? {2}", 600851475143, 6857, Problems_1_Thru_10.LargestPrime (600851475143) == 6857);
            Console.WriteLine ("004: Largest Palindrome of two 3-digit numbers is 906609? {0}", Problems_1_Thru_10.LargestPalindromeProd() == 906609);
            Console.WriteLine ("005: Smallest multiple of range 1 to 20 is: 232792560? {0}", Problems_1_Thru_10.smallestMultiple(20) == 232792560);
            Console.WriteLine ("006: Difference between Square of the sums to the sum of the squares from 1 to 100 is: 25164150? {0}", Problems_1_Thru_10.sumSquareDifference(100) == 25164150);
            Console.WriteLine ("007: 10,001st Prime is 104743? {0}", Problems_1_Thru_10.NthPrime(10001) == 104743);
            Console.WriteLine ("008: Largest product in Series is 23514624000? {0}", Problems_1_Thru_10.largestProductInSeries(13) == 23514624000);
		}
	}
}
