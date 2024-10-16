// const a = [1, 2, 3, 4]; // Example array
// const age = 25; // Define the 'age' variable

// const ad = a.every((a, index) => {
//   console.log(a, index);
//   return a + age + 1; // This now has access to 'age'
// });


const b=[
    {
        name:'xuandat',
        coin:1000
    },
    {
        name: 'hieu',
        coin:2000
    },
     {
        name: 'hieu2',
        coin:3000
    }
]

const d = b.filter((ba, index) => {
    for (let i = 0; i < ba.length; i++) {
        if (i !== 1000) {
          return (index += i);
      }
    }
    return index
})

console.log(d)