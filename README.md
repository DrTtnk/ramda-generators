# Ramda Generators

A collection of lazily evaluated generators and functions to work with generators in Javascript and Typescript, following the style of Ramda's functions

It allows: 
 - Lazy evaluation
 - Infinite streams
 - Async generators
 
Every function is curried

## Getting started 

### Installation

```sh
npm i ramda-generators
```
or
```sh
yarn add ramda-generators
``` 

### Usage

#### ES6/Typescript

```javascript
import R  from 'ramda'
import RG from 'ramda-generators'

const everyNumber = RG.generate(index => index, null);

for(const res of RG.map(R.multiply(10), everyNumber.start()))
    console.log(res); // 10, 20, 30, 40, 50...
```

#### Example - Piping
Functions and generators can be piped like every function in Ramda
```javascript
import R  from 'ramda'
import RG from 'ramda-generators'

const isOdd = x => x % 2 !== 0;

const evenToString = R.pipe(
    RG.generate(index => index, null).start,
    RG.filter(isOdd),
    RG.map(n => `#${n}`),
);

for(const res of evenToString())
    console.log(res); // "#1", "#3", "#5", "#7"...
```

#### Example - Unique Timestamp

```javat
 import RG from 'ramda-generators'

const timeStamps = R.pipe(
    RG.generate(() => (new Date()).toISOString(), null).start,
    RG.debounce,
    RG.take(5),
)();

// timeStamps: [
// '2020-01-06T19:40:56.652Z',
// '2020-01-06T19:40:56.653Z',
// '2020-01-06T19:40:56.654Z',
// '2020-01-06T19:40:56.655Z',
// '2020-01-06T19:40:56.656Z' ]
```

### Contributing
Feel more than free to open Issues, Merge requests and Feature requests at any time :D
