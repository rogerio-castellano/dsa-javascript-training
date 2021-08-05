/*  Merge sort
    - Divide into half
    - Sort each half O
    - Merge the results
*/

export function mergeSort(array) {
  if(array.length <= 1)
    return array;

   let middle = parseInt(array.length / 2);
   let il = 0;
   let ir = 0;
   let left = new Array();
   let right = new Array();

   for(let i = 0; i < middle; i++)
    left[il++] = array[i];

   for(let i = middle; i < array.length; i++)
    right[ir++] = array[i];

  left = mergeSort(left);
  right = mergeSort(right);

  il=0;
  ir=0;
  let i=0;
  let result = new Array();

  while(il < left.length && ir < right.length) {
    if(left[il] < right[ir])
      result[i++] = left[il++];
    else
      result[i++] = right[ir++];
  }

  while(il < left.length) {
      result[i++] = left[il++];
  }

  while(ir < right.length) {
    result[i++] = right[ir++];
  } 

  return result;

}

/* Quick sort
    - Partition (swap p/>=pivot)
    - Sort left (boundary - 1) O
    - Sort right (boundary) O
*/

export function quickSort(array) {
  quickSortSegment(array, 0, array.length - 1);
  return;
}

function quickSortSegment(array, start, end) {
  if(start > end)
    return;
  
  let pivot = array[end];
  let boundary = -1;

  for(let i = start; i <= end; i++)
  {
    if(array[i] >= pivot) {
      swap(array, i, ++boundary);
    }
  }

  quickSort(array, 0, boundary - 1);
  quickSort(array, boundary, array.length - 1);
}

function swap(array, i1, i2) {
  let temp = array[i1];
  array[i1] = array[i2];
  array[i2] = temp;
}