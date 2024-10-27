type Age = number;
type Name = string;
type Player = {
    readonly name:Name,
    age?:Age
};

const david : Player = {
    name :"David",
    age : 28
};

function playerMarker(name: string) : Player {
    return {
        name
    }
};

const playerMarker2 = (name:string) : Player => ({name});


console.log(playerMarker("david"));

//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////


type Player2 = {
    readonly name:string
    age?:number
}

const playerMaker = (name: string): Player2 => ({name})

const nico = playerMaker("nico")


const numbers: readonly number[] = [1, 2, 3, 4]

const player2: [string, number, boolean] = ["nico", 1, true]


console.log(player2);
console.log(numbers);
console.log(nico);

//////////////////////////////////////////////////////////

// readonly


// readonly tuple


// any -> any type passible 


// unkown
    // * API에서 data 를 받을 때 type 을 모른다면 
    // let a:unknown -> 을 통해 모르는 타입의 변수를 세팅할 수 있음

let a:unknown;

if(typeof a === "number"){
    let b = a + 1
}

if(typeof a === "string"){
    let b = a.toUpperCase
}



// viod 
    // 함수의 값이 없는 경우 자동으로 void 처리됨



// never
    // 함수가 절대 return 하지 않을 때 발생 
    // 함수에서 예외(exeption) 발생 시 

function hello(name:string | number){
    if(typeof name === "string"){
        name // string 
    } else if (typeof name === "number"){
        name // number
    } else {
        name // neber 
    }
}

///////////////////////////////////////////


// Type Aliases는 타입에 대한 새로운 이름(별칭)을 만드는 방법
// type 키워드를 사용해서 정의


// 1. 기본적인 타입 별칭
type UserID = string;
let myID: UserID = "abc123";

// 2. 객체 타입에 대한 별칭
type User = {
    name: string;
    age: number;
    email: string;
};

const user: User = {
    name: "Kim",
    age: 25,
    email: "kim@example.com"
};

// 3. 유니온 타입에 대한 별칭
type Status = "pending" | "completed" | "failed";
let taskStatus: Status = "pending";

// 4. 함수 타입에 대한 별칭
type CalcFunction = (x: number, y: number) => number;
const add: CalcFunction = (a, b) => a + b;



// Interface와 비슷하지만 차이점이 있음

// Type Alias
type Animal = {
    name: string;
};

// Interface
interface Animal {
    name: string;
}

//////////////////////////////

// QUIZ 오답 관련


// 1. **Tuples(튜플)**
// 튜플은 배열의 각 요소의 타입과 위치가 고정된 특별한 배열입니다
let tuple: [string, number, boolean] = ["hello", 42, true];

// 일반 배열은 같은 타입의 요소만 가질 수 있습니다
let array: string[] = ["hello", "world"];

// 실제 사용 예시
// React의 useState 훅이 대표적인 튜플 사용 예시입니다
const [isLoading, setIsLoading]: [boolean, (value: boolean) => void] = useState(false);


// 2. **배열 타입 선언 문법**
// 문자열 배열을 반환하는 함수의 올바른 문법
function getNames(): string[] {
    return ["Kim", "Lee", "Park"];
}

// 잘못된 문법
function getNames(): strings() { // ❌ 이렇게 하면 안됩니다
    return ["Kim", "Lee", "Park"];
}

// 다른 타입의 배열 예시
function getNumbers(): number[] {
    return [1, 2, 3];
}


// 3. **불리언 배열 타입**
// 올바른 문법
let boolArray: boolean[] = [true, false, true];

// 잘못된 문법
let boolArray: booleans[] = [true, false, true]; // ❌ 이렇게 하면 안됩니다

// 다른 예시
const checkList: boolean[] = [
    true,  // 완료됨
    false, // 미완료
    true   // 완료됨
];


// 주요 포인트:
// - Tuple은 고정된 길이와 타입을 가진 배열입니다
// - 배열 타입은 `타입[]` 형식으로 선언합니다 (예: `string[]`, `number[]`, `boolean[]`)
// - 함수가 배열을 반환할 때는 `: 타입[]`을 사용합니다
// - 타입 이름은 항상 단수형을 사용합니다 (`boolean[]`이지 `booleans[]`가 아님)

/////////////////////////////////
///////[-- Functions --]/////////
/////////////////////////////////


// call signatures
// polymorphism
// overloading

// call signatures

// 프로퍼티로 호출 가능한 것을 설명하려면 객체 타입에 Call Signature을 작성할 수 있습니다.
// Call Signatures는 다음과 같이 함수의 매개 변수(parameter)와 반환 타입을 지정합니다.

type PizzaFunction = {
pizza: string;
(args: number): boolean;
};

function hello(fn: PizzaFunction) {
console.log(fn.pizza, fn(6));
}


// 1. 애로우 함수
const superSuperPrint: SuperPrint = (arr) => arr.forEach(a => console.log(a))

// 2. 일반 함수
const superPrint1: SuperPrint = function(arr) {
arr.forEach(a => console.log(a))
}



///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////



// 배열의 마지막 요소를 반환하는 함수
function last<T>(arr: T[]): T | null {
    if (arr.length === 0) return null;
    return arr[arr.length - 1];
}


// 배열의 시작 부분에 item을 추가하는 함수
function prepend<T>(arr: T[], item: T): T[] {
    return [item, ...arr];
}


// 두 배열을 하나로 섞는 함수
function mix<T>(arr1: T[], arr2: T[]): T[] {
    const result: T[] = [];
    const maxLength = Math.max(arr1.length, arr2.length);
    
    for (let i = 0; i < maxLength; i++) {
        if (i < arr1.length) result.push(arr1[i]);
        if (i < arr2.length) result.push(arr2[i]);
    }
    
    return result;
}


// 배열의 길이를 반환하는 함수
function count<T>(arr: T[]): number {
    return arr.length;
}


// item의 인덱스를 찾는 함수
function findIndex<T>(arr: T[], item: T): number | null {
    const index = arr.indexOf(item);
    return index === -1 ? null : index;
}


// 배열을 slice하는 함수
function slice<T>(arr: T[], startIndex: number, endIndex?: number): T[] {
    if (endIndex === undefined) {
        return arr.slice(startIndex);
    }
    return arr.slice(startIndex, endIndex);
}


// 테스트
const testArray = [1, 2, 3, 4, 5];
console.log("Last:", last(testArray)); // 5
console.log("Prepend:", prepend(testArray, 0)); // [0, 1, 2, 3, 4, 5]
console.log("Mix:", mix([1, 2, 3], ['a', 'b', 'c'])); // [1, 'a', 2, 'b', 3, 'c']
console.log("Count:", count(testArray)); // 5
console.log("FindIndex:", findIndex(testArray, 3)); // 2
console.log("Slice:", slice(testArray, 1, 4)); // [2, 3, 4]



//////////////////////////////////////
//////[-- interface / type --]////////
//////////////////////////////////////

interface UUser {
    name:string
}

type UUUser = {
    name:string
}

////////

interface PPlayer extends UUser {
}

type PPPlayer = UUUser & {
}

////////

const nnico : Player = {
    name : "nnico"
}

const nnnico : PPPlayer = {
    name : "nnnico"
}


//////////////////////////////////////
//////////////////////////////////////



//////////////////////////////////////
//////[-- interface & class --]///////
//////////////////////////////////////

// 인터페이스는 타입스크립트의 핵심 기능으로, 객체의 "계약서" 또는 "설계도" 역할을 합니다.
// JavaScript로 컴파일되면 완전히 사라지므로 런타임 오버헤드가 없습니다.
interface User {
    firstName: string,  // 문자열 타입의 firstName 필수
    lastName: string,   // 문자열 타입의 lastName 필수
    sayHi(name: string): string  // 문자열 매개변수를 받아 문자열을 반환하는 메소드
    fullName(): string  // 매개변수 없이 문자열을 반환하는 메소드
 }
 
 interface Human {
    health: string,  // 문자열 타입의 health 필수
 }
 
 // Player 클래스는 User와 Human 두 인터페이스를 동시에 구현(implements)합니다.
 // TypeScript에서는 여러 인터페이스를 동시에 구현할 수 있습니다(다중 구현).
 class Player implements User, Human {
    constructor(
        // constructor의 매개변수에 public을 붙이면:
        // 1. 자동으로 클래스의 프로퍼티로 선언됨
        // 2. 생성자에서 자동으로 할당됨
        // 3. this.firstName = firstName 같은 보일러플레이트 코드를 줄일 수 있음
        public firstName: string,  // public으로 선언된 멤버는 어디서나 접근 가능
        public lastName: string,
        public health: string,
    ) {}
 
    // User 인터페이스에서 정의한 sayHi 메소드 구현
    sayHi(name: string) {
        return `hi ${name}. My name is ${this.fullName()}`
    }
 
    // User 인터페이스에서 정의한 fullName 메소드 구현
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
 }
 
 // 인터페이스를 타입으로 활용하는 예시
 // makeUser 함수는 User 타입의 매개변수를 받아 User 타입을 반환
 function makeUser(user: User): User {
    // 반환되는 객체는 User 인터페이스의 모든 요구사항을 충족해야 함
    return {
        firstName: 'hw',
        lastName: 'kim',
        sayHi: (name) => 'hi',
        fullName: () => 'xx',
    }
 }
 
 // 함수 호출 시에도 User 인터페이스의 형태를 정확히 지켜야 함
 makeUser({
    firstName: 'hw',
    lastName: 'kim',
    sayHi: (name) => 'hi',
    fullName: () => 'xx',
 })
 
 /* 인터페이스 vs 추상클래스 비교
 인터페이스: 
 - 순수하게 타입 체킹을 위한 도구
 - JavaScript로 변환 시 코드가 사라짐
 - 다중 구현 가능
 - 구현체를 가질 수 없음
 
 추상클래스:
 - 실제 구현체를 가질 수 있음
 - JavaScript로 변환 시 코드가 남음
 - 단일 상속만 가능
 - 생성자를 가질 수 있음
 */
 
 /* 인터페이스 활용 예시
 // 1. 타입으로 사용
 const user: User = {
    firstName: "John",
    lastName: "Doe",
    sayHi: (name) => "Hello",
    fullName: () => "John Doe"
 };
 
 // 2. 클래스 구현을 위한 계약으로 사용
 class Player implements User, Human {
    // ...
 }
 
 // 3. 함수 매개변수/반환 타입으로 사용
 function makeUser(user: User): User {
    // ...
 }
 */
 
 /* 이러한 패턴들의 장점
 1. 타입 안정성: 컴파일 시점에 타입 오류를 잡을 수 있음
 2. 유지보수성: 인터페이스를 통해 코드의 구조를 명확히 파악 가능
 3. 재사용성: 인터페이스를 통해 코드를 쉽게 재사용 가능
 4. 확장성: 인터페이스를 구현하는 새로운 클래스를 쉽게 추가 가능
 */


abstract class Human {
    constructor(
        protected firstName: string,
        protected lastName: string
    ) {}
    abstract sayHi(name:string):string
    abstract fullName(name:string)
}


// 인터페이스 다중 상속가능
class  implements User,Human{
    constructor(
    // 인터페이스를 상속하면 public property만 사용할 수 있다는 문제가 있다.
    public firstName :string,
    public lastName:string,
    public health :string,
    ){}
    sayHi(name:string) {
    return `hi ${name}. My name is ${this.fullName()}`
    }
    fullName(){
    return `${this.firstName} ${this.lastName}`;
    }
    }
    
    // 인터페이스도 타입처럼 사용 가능
    
    function makeUser(user:User):User{
    return {
    firstName :'hw',
    lastName: 'kim',
    sayHi:(name)=>'hi',
    fullName: ()=>'xx',
    }
    }
    
    makeUser({
    firstName :'hw',
    lastName: 'kim',
    sayHi:(name)=>'hi',
    fullName: ()=>'xx',
    })

/////////////////////////////
/////////////////////////////
/////////////////////////////


/**
 * TypeScript 핵심 개념 정리
 * 
 * 주요 질문들:
 * 1. 추상 클래스란 무엇인가?
 * 2. 추상화란 무엇인가?
 * 3. constructor의 역할은?
 * 4. void와 new의 의미는?
 * 5. this 키워드의 의미는?
 * 6. private과 같은 접근 제어자의 역할은?
 */

// 1. 추상 클래스와 추상화
abstract class Animal {
    // 추상 클래스: 직접 인스턴스화할 수 없고, 상속을 통해서만 사용 가능
    constructor(protected name: string) {}
    
    // 일반 메서드: 구현이 있는 메서드
    eat() {
        console.log(`${this.name}이(가) 먹이를 먹습니다.`);
    }
    
    // 추상 메서드: 상속받는 클래스에서 반드시 구현해야 함
    abstract makeSound(): void;
}

// 추상 클래스 구현
class Dog extends Animal {
    makeSound() {
        console.log("멍멍!");
    }
}

// 2. 추상화의 예시 - 복잡한 내부 구현을 감추고 간단한 인터페이스 제공
class Car {
    private engineRunning: boolean = false;
    private fuelAmount: number = 100;
    
    // 복잡한 내부 동작을 간단한 메서드로 추상화
    start() {
        this.checkFuel();
        this.initializeEngine();
        this.engineRunning = true;
        console.log("차가 시동됩니다.");
    }
    
    private checkFuel() {
        if (this.fuelAmount < 10) {
            throw new Error("연료가 부족합니다.");
        }
    }
    
    private initializeEngine() {
        // 복잡한 엔진 초기화 로직...
    }
}

// 3. Constructor와 this 키워드
class Person {
    // 클래스의 프로퍼티 정의
    private age: number;
    public name: string;
    
    // constructor: 객체 초기화를 담당하는 특별한 메서드
    constructor(name: string, age: number) {
        // this: 현재 생성되는 객체 자신을 가리킴
        this.name = name;  // this.name은 위에서 정의한 프로퍼티
        this.age = age;    // this.age는 위에서 정의한 프로퍼티
    }
    
    // 메서드에서의 this 사용
    introduce() {
        // this를 통해 현재 객체의 프로퍼티에 접근
        console.log(`안녕하세요, ${this.name}입니다. ${this.age}살입니다.`);
    }
}

// 4. void와 new 키워드
class Example {
    // void: 반환값이 없는 함수의 반환 타입
    printHello(): void {
        console.log("Hello!");
        // return 값이 없음
    }
    
    // 값을 반환하는 함수와 비교
    getMessage(): string {
        return "Hello!";
    }
}

// new: 클래스의 새로운 인스턴스(객체)를 생성
const person1 = new Person("철수", 20);
const person2 = new Person("영희", 25);

// 5. 접근 제어자 (Access Modifiers)
class BankAccount {
    // private: 클래스 내부에서만 접근 가능
    private balance: number = 0;
    
    // public: 어디서나 접근 가능 (기본값)
    public accountHolder: string;
    
    // protected: 해당 클래스와 상속받은 클래스에서만 접근 가능
    protected accountNumber: string;
    
    constructor(holder: string, accountNum: string) {
        this.accountHolder = holder;
        this.accountNumber = accountNum;
    }
    
    // public 메서드를 통한 private 데이터 접근
    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            this.logTransaction("입금", amount);
        }
    }
    
    // private 메서드
    private logTransaction(type: string, amount: number): void {
        console.log(`${type}: ${amount}원 (잔액: ${this.balance}원)`);
    }
}

// 사용 예시
const myAccount = new BankAccount("홍길동", "1234-5678");
myAccount.deposit(1000);  // OK: public 메서드
// myAccount.balance  // 에러: private 속성에 직접 접근 불가
// myAccount.logTransaction  // 에러: private 메서드에 직접 접근 불가

/**
 * 핵심 정리:
 * 
 * 1. 추상 클래스와 추상화
 *    - 추상 클래스: 직접 인스턴스화할 수 없는 클래스
 *    - 추상화: 복잡한 내부 구현을 감추고 간단한 인터페이스 제공
 * 
 * 2. Constructor
 *    - 객체가 생성될 때 자동으로 호출되는 특별한 메서드
 *    - 객체의 초기 상태를 설정하는 역할
 * 
 * 3. this 키워드
 *    - 현재 객체 자신을 가리키는 참조
 *    - 객체의 프로퍼티와 메서드에 접근할 때 사용
 * 
 * 4. void와 new
 *    - void: 함수가 값을 반환하지 않음을 나타내는 타입
 *    - new: 클래스의 새로운 인스턴스를 생성하는 연산자
 * 
 * 5. 접근 제어자
 *    - private: 클래스 내부에서만 접근 가능
 *    - public: 어디서나 접근 가능
 *    - protected: 해당 클래스와 상속받은 클래스에서만 접근 가능
 */



///////////////////////////////
///////////////////////////////
///////////////////////////////


/**
 * TypeScript 고급 개념 구현 예제: 제네릭 스토리지 시스템
 * 
 * 구현된 개념들:
 * 1. 제네릭 (Generics)
 * 2. 인터페이스 (Interface)
 * 3. 접근 제어자 (Access Modifiers)
 * 4. 타입 인덱싱 (Type Indexing)
 * 5. CRUD 패턴 구현
 */

// 제네릭 인터페이스: 타입 T를 파라미터로 받아 사용
interface StorageItem<T> {
    value: T;
    timestamp: number;
}

// 스토리지 인터페이스: 문자열 키와 제네릭 타입 T를 가진 객체
interface Storage<T> {
    [key: string]: StorageItem<T>;
}

// 스토리지 동작 정의 인터페이스
interface IStorage<T> {
    set(key: string, value: T): void;
    get(key: string): T | undefined;
    update(key: string, value: T): void;
    remove(key: string): void;
    clear(): void;
}

// 제네릭 클래스 구현
class LocalStorage<T> implements IStorage<T> {
    // private 접근 제어자로 외부 직접 접근 방지
    private storage: Storage<T> = {};
    
    // Create: 새로운 아이템 추가
    set(key: string, value: T): void {
        if (this.storage[key] !== undefined) {
            console.log(`${key}가 이미 존재합니다. update를 호출하세요.`);
            return;
        }
        
        // 타임스탬프와 함께 저장
        this.storage[key] = {
            value,
            timestamp: Date.now()
        };
    }
    
    // Read: 아이템 조회
    get(key: string): T | undefined {
        if (this.storage[key] === undefined) {
            console.log(`${key}가 존재하지 않습니다.`);
            return undefined;
        }
        return this.storage[key].value;
    }
    
    // Update: 기존 아이템 업데이트
    update(key: string, value: T): void {
        if (this.storage[key] === undefined) {
            console.log(`${key}가 존재하지 않아 새로 만듭니다.`);
        }
        
        this.storage[key] = {
            value,
            timestamp: Date.now()
        };
    }
    
    // Delete: 아이템 삭제
    remove(key: string): void {
        if (this.storage[key] === undefined) {
            console.log(`${key}가 존재하지 않습니다.`);
            return;
        }
        delete this.storage[key];
    }
    
    // 전체 스토리지 초기화
    clear(): void {
        this.storage = {};
    }
    
    // 추가 유틸리티 메서드들
    
    // 모든 키 반환
    getKeys(): string[] {
        return Object.keys(this.storage);
    }
    
    // 저장된 아이템 개수 반환
    size(): number {
        return Object.keys(this.storage).length;
    }
    
    // 특정 키의 마지막 수정 시간 반환
    getLastModified(key: string): Date | undefined {
        if (this.storage[key] === undefined) {
            return undefined;
        }
        return new Date(this.storage[key].timestamp);
    }
}

// 사용 예시
// 문자열을 저장하는 스토리지
const stringsStorage = new LocalStorage<string>();
stringsStorage.set("name", "Alice");
stringsStorage.set("greeting", "Hello");
console.log(stringsStorage.get("name")); // "Alice"

// 불리언을 저장하는 스토리지
const booleanStorage = new LocalStorage<boolean>();
booleanStorage.set("isActive", true);
booleanStorage.update("isActive", false);
console.log(booleanStorage.get("isActive")); // false

// 커스텀 타입 예시
interface User {
    name: string;
    age: number;
}

// User 객체를 저장하는 스토리지
const userStorage = new LocalStorage<User>();
userStorage.set("user1", { name: "Bob", age: 30 });
console.log(userStorage.get("user1")); // { name: "Bob", age: 30 }

/**
 * 구현된 타입스크립트 기능 설명:
 * 
 * 1. 제네릭 (<T>):
 *    - 타입을 파라미터로 받아 재사용 가능한 코드 작성
 *    - Storage<T>, LocalStorage<T> 등에서 사용
 * 
 * 2. 인터페이스:
 *    - StorageItem: 저장될 아이템의 구조 정의
 *    - Storage: 스토리지 객체의 구조 정의
 *    - IStorage: 스토리지 클래스가 구현해야 할 메서드 정의
 * 
 * 3. 타입 인덱싱:
 *    - [key: string]: StorageItem<T> 형태로 동적 키 허용
 * 
 * 4. 접근 제어자:
 *    - private storage: 내부 구현 은닉
 * 
 * 5. CRUD 패턴:
 *    - Create (set)
 *    - Read (get)
 *    - Update (update)
 *    - Delete (remove)
 */