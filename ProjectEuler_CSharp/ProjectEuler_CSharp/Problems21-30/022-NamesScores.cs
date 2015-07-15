using System;
using System.Linq;
using System.Collections.Generic;
using System.Text.RegularExpressions;


public class Problem22
{
//  Using names.txt (right click and 'Save Link/Target As...'), a 46K text file containing over five-thousand first names, begin by sorting it into alphabetical order.
//  Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.
//        
//  For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list.
//  So, COLIN would obtain a score of 938 × 53 = 49714.
//            
//  What is the total of all the name scores in the file?

	public static void NamesScores ()
	{
        // This dictionary hold each letter's value in accordance with the problem
        Dictionary<char, int> letterScores = new Dictionary<char, int>(){{'A', 1},{'B', 2},{'C', 3},{'D', 4},{'E', 5},{'F', 6},{'G', 7},{'H', 8},{'I', 9},{'J', 10},{'K', 11},{'L', 12},{'M', 13},{'N', 14},{'O', 15},{'P', 16},{'Q', 17},{'R', 18},{'S', 19},{'T', 20},{'U', 21},{'V', 22},{'W', 23},{'X', 24},{'Y', 25},{'Z', 26}};

        // This converts the comma separated text file given to a List<string> of the names without the quotation marks.
        List<string> names = System.IO.File.ReadAllText("./p022_names.txt").Split(',').Select(name => (string)Regex.Match(name, "\"(.+)\"").Groups[1].Value ).ToList();

        // This sorts the names alphabetically.
        names.Sort ();

        // These track the result and the current name we're looking at (foreach doesn't track index, and index would need modification anyway).
        long result = 0;
        int namePlace = 1;

        foreach (string name in names) 
        {
            // We aggregate each character in the name to its value, then multiply that by its place in the list.
            result += (long)(namePlace * name.ToCharArray().Aggregate(0, (total, current) => {
                total += letterScores[current];
                return total;
            }, num => num));
            namePlace++;
        }
        Console.WriteLine (result);
	}
	
}


