// //number

// let notANumber:number=NaN;
// let num:number=123;
// let infinityNumber:number=Infinity;
// let decimal:number=6;
// let hex:number=0xf00d;
// let binary:number=0b1010;
// let octal:number=0o744;

//any任意類型 unknow 不知道類型
//1.to type頂級類型any known
//2. Object
//3. Number String Boolean
//4. number string boolean
//5. 1   '小滿' false
//6. never

// unknown 只能賦值給自身
// unknown 沒有辦法讀任何屬性 方法也不能使用

//1.Object
// let a:Object = 123
// let a1:Object = '123'
// let a2:Object = []
// let a3: Object = {};
// let a4: Object = ()=>{};

//2.object
// let a: object = [];
// let a: object = {};
// let a: object = ()=>{};

// let a:{}//new Object
// a.age=2 //不行

//interface
//重名 重和
//任意key
//加? readonly
//接口類型
//定義函數類型
//不能多屬性 也不能少屬性
// interface Test{
//     name:string
//     age:number
//     [propName:string]:any
// }
// let a:Test={
//     name:"test",
//     age:123,
//     a:123,
//     b:'123'
// }
// interface Fn{
//     (name:string):number[]
// }
// const fn:Fn=(name:string)=>{
//     return [1]
// }

// function a(...args:number[]){
//     let a:IArguments=arguments
//     console.log(a)
// }
// a(1,2,3,4)

// interface Obj{
// user:number[]
// add:(this:Obj,num:number)=>void
// }

// let obj:Obj={
//     user:[1,2,3],
//     add(this:Obj,num){
//         this.user.push(num)
//     }
// }
// obj.add(4)
// console.log(obj)

// let user:number[]=[1,2,3]

// function findNum(add: number[]): number[];
// function findNum(id: number): number[];
// function findNum(): number[];
// function findNum(ids?:number|number[]) {
//     if(typeof ids =='number'){
//         return user.filter(v=>v==ids)
//     }else if(Array.isArray(ids)){
//         user.push(...ids)
//         return user
//     }else{
//         return user
//     }
// }
// console.log(findNum(3))

// interface People{
//     name:string
//     age:number
// }

// interface Man{
//     sex:number
// }

// const carl = (man:People&Man):void=>{
//     console.log(man)
// }
// (window as any ).a=1

// let num:Number = new Number(1)
// let date:Date = new Date()
// let reg:RegExp = new RegExp(/\w/)
// let error:Error = new Error('wrong')
// let xhr:XMLHttpRequest = new XMLHttpRequest()

// let div = document.querySelector('div')
// let div:NodeListOf<HTMLDivElement | HTMLElement > = document.querySelectorAll('div')

// const local:Storage=localStorage
// const lo:Location = location
// const promise:Promise<number> = new Promise((resolve) =>resolve(1))
// const cookie:string = document.cookie

// interface Options {
//   el: string | HTMLElement;
// }

// interface VueCls {
//   options: Options;
//   init(): void;
// }
// interface Vnode {
//   tag: string;
//   text?: string;
//   children?: Vnode[];
// }
// //虛擬DOM簡單版
// class Dom {
//   createElement(el: string) {
//     return document.createElement(el);
//   }
//   setText(el: HTMLElement, text: string | null) {
//     el.textContent = text;
//   }
//   render(data: Vnode) {
//     let root = this.createElement(data.tag);
//     if (data.children && Array.isArray(data.children)) {
//       data.children.forEach((item) => {
//         let child = this.render(item);
//         root.appendChild(child);
//       });
//     } else {
//       this.setText(root, data.text as string);
//     }
//     return root;
//   }
// }

// class Vue extends Dom implements VueCls {
//   options: Options;
//   constructor(options: Options) {
//     super(); //父類的prototype.constructor.call
//     this.options = options;
//     this.init();
//   }
//   init(): void {
//     let data: Vnode = {
//       tag: "div",
//       children: [
//         {
//           tag: "section",
//           text: "我是子節點",
//         },
//         {
//           tag: "section2",
//           children: [
//             {
//               tag: "div",
//               text: "我是孫節點",
//             },
//           ],
//         },
//       ],
//     };
//     let app =
//       typeof this.options.el == "string"
//         ? document.querySelector(this.options.el)
//         : this.options.el;
//     app?.appendChild(this.render(data));
//   }
// }
// new Vue({
//   el: "#app",
// });

// class Ref {
//   _value: any;
//   constructor(value: any) {
//     this._value = value;
//   }

//   get value() {
//     return this._value + "vvv";
//   }

//   set value(newVal) {
//     this._value=newVal+'小滿'

//   }
// }
// const ref=new Ref('哈哈哈')
// console.log(ref.value)
// ref.value='壞人'
// console.log(ref.value);

//基類

// abstract class Vue{
//     name='Carl'
//     constructor(name?:string){
//         this.name=name? name:'';
//     }
//     getName():string{
//         return this.name
//     }
//     abstract init(name:string):void
// }
// class React extends Vue{
//     constructor(){
//         super()
//     }
//     init(name:string){}
//     setName(name:string){
//         this.name=name
//     }
// }
// const react = new React()
// react.setName('小滿')
// console.log(react.getName())

// enum Types{
//     success
// }
// let success:number = Types.success
// let key = Types[success]
// console.log(`value--${success}`,`key---${key}`)

// extends表示包含
// type num = 1 extends number ? 1 : 0;

// type A = "唱" | "跳" | "rap" | "籃球";

// function kun(value: A) {
//   switch (value) {
//     case "唱":
//       break;
//     case "跳":
//       break;
//     case "rap":
//       break;
//     case "籃球":
//       break;
//     default:
//       //兜底邏輯
//       const error: never = value;
//       break;
//   }
// }

//Symbol
//  let a1: symbol = Symbol(1);
//  let a2: symbol = Symbol(1);

//for Symbol for全局symbol有沒有註冊過這個key，如果有就拿來用，沒有創一個
//  console.log(Symbol.for('test')===Symbol.for('test'))

//  let obj = {
//    name: 1,
//    [a1]: 111,
//    [a2]: 222,
//  };
// console.log(obj)
//for in 讀不到symbol
// for(let key in obj){
//     console.log(key)
// }

//keys讀不到
// console.log(Object.keys(obj));
//讀不到name
// console.log(Object.getOwnPropertySymbols(obj));
//可以讀到完整的
// console.log(Reflect.ownKeys(obj));

//生成器
// function* gen(){
//     yield Promise.resolve("嘿嘿");
//     yield "哈哈";
//     yield '閉嘴';
// }
// const man = gen()
// console.log(man.next());
// console.log(man.next());
// console.log(man.next());
// console.log(man.next());

//2.迭代器
//3.set map
// let set:Set<number>=new Set([1,1,2,2,3,3])//天然去重
// console.log(set)

// let map: Map<any, any> = new Map();
// let Arr = [1, 2, 3];
// map.set(Arr, "test");
// console.log(map.get(Arr))

// function args() {
//   console.log(arguments)//偽陣列
// }

// const each = (value: any) => {
//   let It: any = value[Symbol.iterator]();
//   let next: any = { done: false };
//   while (!next.done) {
//       next = It.next();
//       if(!next.done){
//           console.log(next.value);
//       }
//   }
// };
// each(new Map().set([1, 2, 3], "test"));

//5.迭代器的語法糖
// for(let value of new Set([1,1,2,2,3,3])){
//     console.log(value)
// }
//6.for of 對象不能用，對象身上沒有Symbol.iterator
//7.解構 底層原理也是去調用iterator
// let [a,b,c]=[4,5,6]
// console.log(a,b,c)
//8.對象支持for of
// let obj={
//     max:5,
//     current:0,
//     [Symbol.iterator](){
//         return {
//             max:this.max,
//             current:this.current,
//             next(){
//                if(this.current==this.max){
//                 return {
//                     value:undefined,
//                     done:true
//                 }
//                }else{
//                 return{
//                     value:this.current++,
//                     done:false
//                 }
//                }
//             }
//         }
//     }
// }
// for(let value of obj){
//     console.log(value)
// }
// let x = [...obj]
// console.log(x)

//泛型

// function num(a:number,b:number):number[]{
//     return [a,b]
// }
// function str(a: string, b: string): string[] {
//   return [a, b];
// }

// function xiaman<T>(a:T,b:T):T[]{
//     return [a,b]
// }

// type A<T> = string | number | T;
// let a :A<null> = null

// interface Data<T>{
//     msg:T
// }
// const data:Data<string>={
//     msg:"msg"
// }

// function add<T = number,K = number>(a:T,b:K):Array<T|K>{
//     return [a,b]
// }
// add(false,'1')
// add(1, false);

// const axios = {
//     get<T>(url:string):Promise<T>{
//         return new Promise((resolve, reject) =>{
//             let xhr:XMLHttpRequest=new XMLHttpRequest();
//             xhr.open('GET', url);
//             xhr.onreadystatechange=()=>{
//                 if(xhr.readyState==4 && xhr.status==200){
//                     resolve(JSON.parse(xhr.responseText));
//                 }
//             }
//             xhr.send(null)
//         })
//     }
// }
// interface Data {
//     msg:string
//     code:number
// }
// axios.get<Data>('./data.json').then(res=>{
//     console.log(res.msg)
// })

//泛型約束

// function add<T extends number>(a:T,b:T){
//     return a+b
// }
// add(1,2)

// interface Len{
//     length:number
// }

// function fn<T extends Len>(a:T){
//     a.length
// }
// fn("1111");
// fn([1,2,3]);
// fn(12345)
// fn(false)

// let obj = {
//     name:"小滿",
//     sex:"女"
// }
// //age keyof
// type Key =keyof typeof obj
// function ob<T extends object,K extends keyof T>(obj:T,key:K){
//     return obj[key]
// }
// ob(obj,'')

// interface Data{
//     name:string
//     age:number
//     sex?:string
// }

// //for in for(let key in obj)
// type Options<T extends object>={
//     readonly [Key in keyof T]?:T[Key]
// }
// type B = Options<Data>

//Mixin混入
// interface Name{
//     name:string
// }
// interface Age{
//     age:number
// }
// interface Sex{
//     sex:number
// }
// const a:Name={name:"John"}
// const b:Age={age:22}
// const c:Sex={sex:1}
// const obj=Object.assign(a,b,c)

//Decorator
//1.類裝飾器 ClassDecorator
//2.屬性裝飾器 PropertyDecorator
//3.參數裝飾器 ParameterDecorator
//4.方法裝飾器 MethodDecorator PropertyDescriptor
//5.裝飾器工廠
//6.import 'reflect-metadata'
//7.axios

const Base = (name:string) => {
 const fn:ClassDecorator=(target=>{
    //  console.log(target);
     target.prototype.name = name;
     target.prototype.fn = () => {
    //    console.log("我是憨憨");
     };
 })
 return fn
};
import axios from 'axios';
import 'reflect-metadata'
const Get = (url:string)=>{
    const fn: MethodDecorator = (
      target,
      __key,
      descriptor: PropertyDescriptor
    ) => {
    //   console.log(target, key, descriptor);
    const key = Reflect.getMetadata('key',target)
      axios.get(url).then(res=>{
        descriptor.value(key? res.data[key]:res.data)
      })
    };
    return fn
}

const Result = ()=>{
    const fn:ParameterDecorator=(target,key,index)=>{
        Reflect.defineMetadata('key','body',target)
        console.log(target, key, index);
    }
    return fn
}
const Name:PropertyDecorator=(target,key)=>{
    console.log(target,key)
}


@Base("xiao yu")
class Http {
    @Name
    xiaoman:string
    constructor(){
        this.xiaoman ='小滿'
    }

  @Get("https://jsonplaceholder.typicode.com/posts/1")
  getList(@Result() data:any) {
    console.log(data)
  }
  create() {}
}
const http = new Http() as any;
// console.log(http.name);
http.fn()