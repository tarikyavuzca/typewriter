const sentence = "hello there from lighthouse labs";
let time = 0;
for (let char of sentence) {
  setTimeout(() => {
  process.stdout.write(char);
}, time)
  time+= 50;
};