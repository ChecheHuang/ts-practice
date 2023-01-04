//todo Array and Readonly Array
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3]; // 等同於上面的寫法
let list3: readonly number[] = [1, 2, 3]; // 不能修改 Array 裡的元素
let list4: ReadonlyArray<number> = [1, 2, 3]; // 等同於上面的寫法
//todo Tuple 則是有固定長度和元素型別的陣列：
let tuple: [number, string, boolean, number] = [3, "foo", true, 10];
tuple = [4, "bar", false, 30];
//實際上 Tuple 更像是以 number 作為 key 的物件型別，並且多了 length 屬性，例如：
interface StringNumberPair {
  length: 4;
  0: number;
  1: string;
  2: boolean;
  3: number;
  // other array methods...
}
// Tuples with Label（帶有標籤的 tuple）
type PersonInfo = [name: string, country: string, age: number];
const aaron: PersonInfo = ["Aaron", "Taiwan", 32];

//Readonly Tuple
// 如果要把陣列直接當成 readonly tuple 使用，可以在定義陣列時加上 as const，如此它就是會是一個值固定的 readonly tuple，如果沒加上 as const 的話，則會是 string[]：
const phoneBrand = ['apple', 'samsung', 'xiaomi', 'sony'] as const;
// readonly tuple
// const phoneBrand: readonly ["apple", "samsung", "xiaomi", "sony"]
//todo Enum
enum Color {
  Red,
  Green,
  Blue,
}
const c: Color = Color.Red; // 0

enum SelectableButtonTypes {
  Important = "important",
  Optional = "optional",
  Irrelevant = "irrelevant",
}


// 範例來自 OneDegree 同事 Ken 與 Ivy

type Nullable<T> = T | null;

enum BE_ENUM_TIME_UNIT {
  year = 'year',
  month = 'month',
  day = 'day',
}

const apiResponse = Math.random() > 0.05 ? BE_ENUM_TIME_UNIT.month : null;

enum FE_ENUM_TIME_UNIT {
  year = 'year',
  month = 'month',
  day = 'day',
}

const map = {
  [BE_ENUM_TIME_UNIT.year]: null,
  [BE_ENUM_TIME_UNIT.month]: FE_ENUM_TIME_UNIT.month,
  [BE_ENUM_TIME_UNIT.day]: FE_ENUM_TIME_UNIT.day,
};

const map2 = {
  [BE_ENUM_TIME_UNIT.year]: null,
  [BE_ENUM_TIME_UNIT.month]: FE_ENUM_TIME_UNIT.month,
  [BE_ENUM_TIME_UNIT.day]: FE_ENUM_TIME_UNIT.day,
} as const;

// 因為沒有用 as const，所以 map[apiResponse] 推倒出來的型別是
// ERROR: Type 'FE_ENUM_TIME_UNIT.year' is not assignable to type 'Nullable<FE_ENUM_TIME_UNIT.month | FE_ENUM_TIME_UNIT.day>'
let unit: Nullable<FE_ENUM_TIME_UNIT.month | FE_ENUM_TIME_UNIT.day> = apiResponse
  ? map[apiResponse]
  : null;

let unit2: Nullable<FE_ENUM_TIME_UNIT.month | FE_ENUM_TIME_UNIT.day> = apiResponse
  ? map2[apiResponse]
  : null;

  