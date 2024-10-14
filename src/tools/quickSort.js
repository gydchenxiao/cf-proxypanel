export function quickSort(arr) {
  if (arr.length <= 1) return arr
  let pivotIndex = Math.floor(arr.length / 2)
  let pivot = arr.splice(pivotIndex, 1)[0]
  // console.log(arr.splice(pivotIndex, 1))
  let left = []
  let right = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([pivot], quickSort(right))
}

export function bubbleSort(arr) {
  if (!Array.isArray(arr)) return
  let noSwaps;
  for (let i = 0; i < arr.length - 1; i++) {
    noSwaps = true;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr
}

export function arraysEqual(a, b) {
  // 检查数组长度
  if (a.length !== b.length) return false;

  // 检查相应位置的元素是否相同
  for (let i = 0; i < a.length; i++) {
    // 如果元素是嵌套数组，则递归比较
    if (Array.isArray(a[i]) && Array.isArray(b[i])) {
      if (!arraysEqual(a[i], b[i])) return false;
    } else if (a[i] !== b[i]) {
      // 如果元素不相同，则数组不相同
      return false;
    }
  }

  // 如果所有检查都通过，则数组相同
  return true;
}