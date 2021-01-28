const div = document.querySelector('root');

const team = [
  'Burns',
  'Hertl',
  'Pavelski',
  'Thorton',
  'Couture'
];

const formattedTeam = new Intl.ListFormat('en-GB', {style: 'long', type: 'conjunction'}).format(team);

div.innerHTML = `<div>${formattedTeam}</div>`;