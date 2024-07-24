import java.util.Map;
import java.util.Arrays;
import java.util.HashMap;

class Solution {
  public int[] frequencySort(int[] nums) {
    Map<Integer, Integer> freqMap = new HashMap<>();

    for (int num : nums) {
      freqMap.put(num, freqMap.getOrDefault(num, 0) + 1);
    }

    Integer[] nums1 = Arrays.stream(nums).boxed().toArray(Integer[]::new);

    Arrays.sort(nums1, (a, b) -> {
      if (freqMap.get(a) == freqMap.get(b)) {
        return b - a;
      }
      return freqMap.get(a) - freqMap.get(b);
    });

    return Arrays.stream(nums1).mapToInt(Integer::intValue).toArray();
  }

  public static void main(String[] args) {
    Solution s = new Solution();
    int[] nums = { 1, 1, 2, 2, 2, 3 };
    int[] result = s.frequencySort(nums);
    // Expect: [3,1,1,2,2,2]
    for (int num : result) {
      System.out.print(num + " ");
    }
  }
}