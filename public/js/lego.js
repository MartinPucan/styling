const div = document.getElementById('root');
const stringSelector = document.getElementById('string');

const sentence = "ahoj, ahoj, cau";
const newSentence = sentence.replaceAll("ahoj", "cus");
console.log(newSentence);
const team = [
  'Adam',
  'Vlada',
  'Mama'
];

const formattedTeam = new Intl.ListFormat('cs-CS', {style: 'long', type: 'disjunction'}).format(team);
const formattedTeamCZ = new Intl.ListFormat('en-US', {style: 'long', type: 'conjunction'}).format(team);

div.innerHTML = `<div>${formattedTeam}</div>`;
div.innerHTML += `<div>${formattedTeamCZ}</div>`;

console.log("it works.");
