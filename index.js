//axios vs fetch

// function main() {
//   fetch("https://sum-server.100xdevs.com/todos").then((res) => {
//     res.json().then(({ todos }) => {
//       console.log(todos.length);
//     });
//   });
// }

const axios=require('axios');
// function main() {
//   fetch("https://sum-server.100xdevs.com/todos").then(async (res) => {
//     const json = await res.json();
//     const data=json.todos;
//     console.log(data.length)
//   });
// }

// async function main() {
//   const response = await fetch("https://sum-server.100xdevs.com/todos");
//   const json = await response.json();
//   const data = json.todos;
//   console.log(data.length);
// }

async function main(){
  const response=await axios("https://sum-server.100xdevs.com/todos")
  console.log(response.data.todos.length)
}

main();
