import {
  areRotations,
  capitalize,
  countVowels,
  isPalindrome,
  maxOcurringChar,
  removeDuplicateChars,
  reverse,
  reverseWords
} from './string';
import each from 'jest-each';

describe('String tests', () => {
  each([
    [null, null, true],
    ['', '', true],
    [null, '', false],
    ['', null, false],
    ['ABCD', 'ABCD', true],
    ['ABCD', 'BCDA', true],
    ['ABCD', 'CDAB', true],
    ['ABCD', 'DABC', true],
    ['ABCD', 'ACBD', false]  
    ]).test(
    'returns rotations between %s and %s, expecting %s',
    (first, second, expected) => {
      expect(areRotations(first, second)).toBe(expected);
    }
  );

  each([
    ['word', 'Word'], 
    ['This is a sentence.', 'This Is A Sentence.'], 
    [null, null],
    ['', ''],
    ]).test(
    'returns capitalized %s, expecting %s',
    (text,expected) => {
      expect(capitalize(text)).toBe(expected);
    }
  );

  each([
    ['a', 1], 
    ['A', 1],
    ['b', 0],
    ['A casa', 3],
    ['Ainda estou vivo.', 8]
    ]).test(
    'returns number of vowels of %s, expecting %s',
    (text,expected) => {
      expect(countVowels(text)).toBe(expected);
    }
  );

  each([
    [null, false], 
    ['', false], 
    ['a', true], 
    ['ana', true], 
    ['banana', false], 
    ]).test(
    'returns if %s is palindrome, expecting %s',
    (text,expected) => {
      expect(isPalindrome(text)).toBe(expected);
    }
  );

  each([
    [null, ''], 
    ['', ''], 
    ['a', 'a'], 
    ['ana', 'a'], 
    ['banana', 'a'], 
    ['aaabbb', 'a']
    ]).test(
    'returns max ocurring char of %s, expecting %s',
    (text,expected) => {
      expect(maxOcurringChar(text)).toBe(expected);
    }
  );

  each([
    [null, ''], 
    ['', ''], 
    ['a', 'a'], 
    ['ana', 'an'], 
    ['banana', 'ban'], 
    ['aaabbb', 'ab']
    ]).test(
    'remove duplicates chars of %s, expecting %s',
    (text,expected) => {
      expect(removeDuplicateChars(text)).toBe(expected);
    }
  );

  each([
    [null, null], 
    ['', ''], 
    ['a', 'a'], 
    ['ana', 'ana'], 
    ['banana', 'ananab'], 
    ['abcd', 'dcba']
    ]).test(
    'reverse %s, expecting %s',
    (text,expected) => {
      expect(reverse(text)).toBe(expected);
    }
  );

  each([
    [null, null], 
    ['', ''], 
    ['a b', 'b a'], 
    ['ana é alta', 'alta é ana'], 
    ['banana', 'banana'], 
    ]).test(
    'reverse %s, expecting %s',
    (text,expected) => {
      expect(reverseWords(text)).toBe(expected);
    }
  );

});