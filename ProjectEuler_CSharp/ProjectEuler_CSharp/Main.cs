using System;
using System.Collections.Generic;

namespace ProjectEuler_CSharp
{
	class MainClass
	{
		public static void Main (string[] args)
		{
//			Check_1_Thru_10 ();
            List<long> test = Problems_1_Thru_10.SieveOfErasthones(2, 100);
            string logThis = "";
            foreach(long entry in test)
            {
                logThis += entry + ",";
            }
            Console.WriteLine(logThis);
//            Console.WriteLine(Problems_1_Thru_10.LargestPrime(600851475143);
		}
		private static void Check_1_Thru_10 ()
		{
			Console.WriteLine ("001: Sum should equal 233168: {0}", Problems_1_Thru_10.Multiples3and5 () == 233168);
			Console.WriteLine ("002: Sum should equal 4613732: {0}", Problems_1_Thru_10.EvenFib () == 4613732);
//            Console.WriteLine ("003: Largest Prime of: {0} is {1}? {2}", 600851475143, Problems_1_Thru_10.LargestPrime (600851475143) == );

		}
	}
}
