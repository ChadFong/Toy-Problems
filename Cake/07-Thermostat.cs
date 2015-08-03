using System;
using System.Collections.Generic;

public static class MaxMinMeanModeTemp
{
    public static void Main()
    {
        
    }
    
}

public class TempTracker
{
   int _max;
   int _min;
   int _sum;
   int _count;
   int _mode;
   int _modeCount;
   Dictionary<int, int> tempCounts;

   public TempTracker()
   {
      tempCounts = new Dictionary<int, int>();
      _count = 0;
      _modeCount = 0;
   }

   public void Insert(int temp)
   {
      _max = temp > _max ? temp : _max;
      _min = temp < _min ? temp : _min;
      _sum += temp;
      _count++;
      if (tempCounts.ContainsKey(temp)) {
        tempCounts[temp] += temp;
      } else {
        tempCounts[temp] = 1;
      }
      if (tempCounts[temp] > _modeCount) {
        _mode = temp;
      }
   } 

   public int GetMax ()
   {
      return _max;
   }

   public int GetMin ()
   {
      return _min;
   }

   public float GetMean()
   {
      return (float)(_sum/_count);
   }

   public int GetMode()
   {
      return _mode;
   }
}
