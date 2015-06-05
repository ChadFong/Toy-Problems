using System;
using System.Collections.Generic;

namespace ProjectEuler_CSharp
{
	class MainClass
	{
		public static void Main (string[] args)
		{
//			Check_1_Thru_10 ();
//            Console.WriteLine (Problems_1_Thru_10.LargestPrime(600851475143) );
//            Console.Write (Problems_1_Thru_10.LargestPrime(88));
            long test = 9223372036854775807;
            Console.WriteLine(Problems_1_Thru_10.LargestPrime(test));
            Console.WriteLine ("Easy solution: {0}", Problems_1_Thru_10.altLgPrimeFactor(test));  
		}
		private static void Check_1_Thru_10 ()
		{
			Console.WriteLine ("001: Sum should equal 233168: {0}", Problems_1_Thru_10.Multiples3and5 () == 233168);
			Console.WriteLine ("002: Sum should equal 4613732: {0}", Problems_1_Thru_10.EvenFib () == 4613732);
//            Console.WriteLine ("003: Largest Prime of: {0} is {1}? {2}", 600851475143, Problems_1_Thru_10.LargestPrime (600851475143) == );

		}
	}
}
