class Solution {
  public char nextGreatestLetter(char[] letters, char target) {
    if (target >= letters[letters.length - 1]) {
      return letters[0];
    }
    int left = 0;
    int right = letters.length - 1;

    while (left < right) {
      int mid = (left + right) / 2;
      if (letters[mid] <= target) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    return letters[left];
  }
}

public class Main {
  public static void main(String[] args) {
    Solution solution = new Solution();
    char[] letters = { 'c', 'f', 'j' };
    System.out.println(solution.nextGreatestLetter(letters, 'a'));
    System.out.println(solution.nextGreatestLetter(letters, 'c'));
    System.out.println(solution.nextGreatestLetter(letters, 'f'));
    System.out.println(solution.nextGreatestLetter(letters, 'j'));
    System.out.println(solution.nextGreatestLetter(letters, 'k'));
  }
}
