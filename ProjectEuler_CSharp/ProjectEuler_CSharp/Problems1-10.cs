using System;
using System.Linq;
using System.Collections.Generic;

namespace ProjectEuler_CSharp
{
	public class Problems_1_Thru_10
	{
//		Problem #1:
		public static int Multiples3and5 ()
		{
//			If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
//			The sum of these multiples is 23.
//			Find the sum of all the multiples of 3 or 5 below 1000.

//			Collect all multiples from 0 to 1000:
			List<int> multiples = new List<int> ();
			for (int i = 3; i < 1000; i++) 
			{
				if( i % 3 == 0 || i % 5 == 0 )
				{
					multiples.Add(i);
				}
			}

//			Sum all numbers in collection:
			return multiples.Aggregate ((current, total) => current + total);
		}
	}
}
