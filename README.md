# TypeChain

## 설치 및 환경설정

### typescript 설치
npm i -D typescript

### package.json 초기화
npm init -y

### tsconfig.json 설정
```
{
    "include": ["src"],
    "compilerOptions": {
        "outDir": "build",
        "target": "ES6"
    }
}
```
- 디렉터리에 tsconfig.json 파일이 있으면 해당 디렉터리가 TypeScript 프로젝트의 루트임을 나타냄 
- tsconfig.json 파일은 프로젝트를 컴파일하는 데 필요한 루트 파일과 컴파일러 옵션을 지정
- https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#handbook-content

### Target (기본값: ES3) -> ES6
- 최신 브라우저는 모든 ES6 기능을 지원하므로 ES6 선택
- 코드가 이전 환경에 배포된 경우 더 낮은 target을 설정하거나 최신 환경에서 코드 실행이 보장되는 경우 더 높은 target을 설정하도록 선택 가능
- (ex) 화살표 함수() => this는 ES5 이하이면 함수 표현식으로 변경

- 특별한 ESNext 값은 TypeScript 버전이 지원하는 가장 높은 버전을 나타내며, 이 설정은 다른 TypeScript 버전 간에 동일한 의미가 아니므로 업그레이드를 예측하기 어렵게 만들 수 있음 주의 필요
https://www.typescriptlang.org/tsconfig#target

### "build": "tsc" 또는 "npx tsc"
```### npm run build```


## 세부 진행과정 

### Type Script 개념 이해 단계
1. Types
2. Call Signatures
3. Overloading
4. Polymorphism 
5. Generics Recap
6. Class
7. Interfaces
8. Polymorphism

### 세부 코드 작성 단계 
1. Targets
2. Lib Configuration
3. Declaration Files
4. JSDoc
5. Blocks
6. DefinitelyTyped
7. Chain
8. Conclusions