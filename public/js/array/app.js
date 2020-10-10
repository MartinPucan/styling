const suitsActors = ["Donna", "Harvey", "Mike", "Rachel"];

const div = document.createElement("div");

const createCardActor = (element, index) => {
  const paragraph = document.createElement("p");

  div.setAttribute("class", "p-2 m-2");
  div.appendChild(paragraph);

  paragraph.innerHTML = `${element}()`;
};

const p = document.createElement("p");
const span = document.createElement("span");
const answers = [];
const yes = "uz jsem vetsi";
const no = "jeste nejsem tak velkej";
document.getElementById("suits").appendChild(p);

for (let i = 0; i < 5; i++) {
  p.innerText += (i > 2) ? yes : no;
}

console.log(createCardActor, "this");
document.getElementById("suits").appendChild(p);

const array = () => suitsActors.length;
console.log(array());

const sayHello = (word) => {
  let name = word ? word.name : `Martin`;

  return `Hello, ${name}`;
};

console.log(sayHello({ name: "Adam" }));
console.log(sayHello()); // or null

// console.log(div);
// document.getElementById('suits').appendChild(div);
