/**
 * Part of Windwalker Packages project.
 *
 * @copyright  Copyright (C) 2023 __ORGANIZATION__.
 * @license    __LICENSE__
 */

// const promise = Promise.any(
//     [
//         Promise.resolve('A'),
//         Promise.reject('B'),
//     ]
//     )
//     .then((v) => {
//         console.log('Then', v);
//     });
  
let p = Promise.resolve(123);
console.log(p);
    p = p.then(null, () => 'GGGG');

console.log(p);

setTimeout(() => {
  console.log(p);
    console.dir(Promise.resolve(123));
}, 10);
