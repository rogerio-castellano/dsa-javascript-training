export function areRotations(first, second) {
  if(!first && !second)
    return first == second;

  const compare = first + first;
  return compare.indexOf(second) != -1;
}

export function capitalize(text)
{
  if(!text)
    return text;

  const words = text.split(' ');
  for(let i = 0; i < words.length ; i++) 
    words[i] = words[i].substr(0,1).toUpperCase() + words[i].substr(1);

  return words.join(' ');
}

export function countVowels(text) {
  const vowels = 'aeiouAEIOU';
  let result = 0;
  for(let i = 0; i < text.length; i++) {
    if(vowels.indexOf(text.substr(i, 1)) != -1) {
      result++;
    }
  }
    return result;
  }

  export function isPalindrome(text) {
    if(!text)
      return false;

    let left = 0;
    let right = text.length - 1;

    while(left <= right) {
      if(text.substr(left++,1) != text.substr(right--, 1)) {
        return false;
      }
    }

    return true;
  }

  export function maxOcurringChar(text) {
    if(!text)
      return '';

    let map = {};

    for(let i = 0; i < text.length; i++) {
      const char = text.substr(i,1);
      if(map[char] == undefined)
        map[char] = 1;
      else
        map[char] = map[char] + 1;
    }

    let maxValue = Number.MIN_SAFE_INTEGER;
    let result = '';

    for(let char in map) {
      if(map[char] > maxValue) {
        maxValue = map[char];
        result = char;
      }
    }

    return result;
  }

  export function removeDuplicateChars(text)
  {
    let result = '';
    if(!text)
      return result;

    let set = {};
    for(let i = 0; i < text.length; i++) {
      let char = text.substr(i,1);
      if(set[char] == undefined) {
        result += char;
        set[char] = char;
      }
    }

    return result;
  }

  export function reverse(text) {
    if(!text)
      return text;
    let result = '';
    for(let i = text.length - 1; i >=0; i--) {
      result += text.substr(i,1);
    }

    return result;
  }

  export function reverseWords(text) {
    if(!text)
      return text;
    const words = text.split(' ');
    let result = '';
    
    for(let i = words.length - 1; i >= 0; i--) {
      result += words[i] + ' ';
    }

    return result.substr(0, result.length - 1);
  }