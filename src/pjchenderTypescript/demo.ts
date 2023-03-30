/**
 * 範例一
 **/

const add = (a: number, b: number): number => a + b;

// 等同於，在變數後直接註記型別為函式
// (a: number, b: number) => number 是 type
// const add: (a: number, b: number) => number = (a, b) => a + b;

/**
 * 範例二
 **/

interface FnParams {
  name: string;
  phone: string;
}
interface FnResponse {
  recipient: string;
  body: string;
}

const sendTextMessage = (to: FnParams): FnResponse => ({
  recipient: `${to.name} <${to.phone}>`, // Aaron <0912345678>
  body: "You're pre-qualified for a loan",
});
