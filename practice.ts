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

//////////////////////////////////////////////////////////


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