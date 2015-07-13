using System;
using System.Linq;
using System.Collections.Generic;


public class Problem21
{
//	Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
//	If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.
//			
//	For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. 
//	The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.
//		
//	Evaluate the sum of all the amicable numbers under a given number.
	public static void AmicableNumbers (int num)
	{
		// We will calculate each amicable number from 1 to 10000 and store each valid number in a dictionary with its sum.
		// That way, if we ever come across a number which is an amicable pair we can do a lookup instead of recalculating
		// it.  
		Dictionary<int, int> amicableSums = new Dictionary<int, int>();
		List<int> divisors = new List<int>();
        List<int> amicable = new List<int>();
		// We only need to check divisors between 1 and √n.  Finding these divisors also illuminate their partners above √n.
		  // That is, 200 / 2 = 100.  finding 2 finds 100.  The largest number we can find without repeating divisors is √n.

		for (int n=2 ; n <= num; n++) 
		{
			divisors.Clear();
			for (int i = 1 ; i <= (int)Math.Floor(Math.Sqrt((double)n)) ; i++) 
			{
				if (n % i == 0) 
				{
					if (n/i != i)  // Prevents us from adding the divisor twice if √n is a divisor.
					{
                        divisors.Add (i);
                    }
                    if (n/i != n) {divisors.Add (n/i);}
				}
			}
			// divisors now contains all divisors of n.
			amicableSums.Add(n, divisors.Aggregate((a,b) => a + b) );
		}
        foreach (KeyValuePair<int, int> potential in amicableSums) 
        {   
            int a = potential.Key;
            int b = potential.Value;
            if (amicableSums.ContainsKey(b))
            {
                if (amicableSums[b] == a && a != b && !amicable.Contains(a))
                {
                    Console.WriteLine("a: {0} and b: {1}", a, b);
                    amicable.Add(a);
                    amicable.Add(b);
                }
            }
        }
        Console.WriteLine(amicable.Aggregate( (a, b) => a + b ) );
	}
	
}


