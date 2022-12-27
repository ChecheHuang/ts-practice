//描述性，用函數的組合來表達計算過程，而非計算步驟
//函數小巧，靈活組裝使用
//遞迴是常見的手段
//函數通常沒有side effect

//immutable
function remove2<T>(arr: Array<T>, i: T) {
  const newArr = arr.filter((a) => a !== i);;
  return newArr;
}
function flatten2(array: Array<any>): Array<any> {
  if (!Array.isArray(array)) {
    return array;
  }
  return ([] as Array<any>).concat(...array.map(flatten2));
}

function permutation2(str: string): Array<string> {
  function R(arr: Array<string>) {
    if (arr.length === 1) {
      return arr;
    }
    return flatten2(
      [...arr].map((char) => R(remove2(arr, char)).map((perm) => char + perm))
    );
  }
  return R([...str]);
}

console.log(permutation2("abc"));

// permutation2("abc") = ["abc", "acb", "bac", "bca", "cab", "cba"];
