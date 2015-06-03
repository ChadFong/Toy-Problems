using System;

namespace ProjectEuler_CSharp
{
	class MainClass
	{
		public static void Main (string[] args)
		{
			Check_1_Thru_10 ();
		}
		private static void Check_1_Thru_10 ()
		{
			Console.WriteLine ("001: Sum should equal 233168: {0}", Problems_1_Thru_10.Prob1_Multiples3and5 () == 233168);
		}
	}
}
