const play = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

export default function мatchers(object) {
  const test = object.sort((a, b) => b.health - a.health);
  return test;
}
мatchers(play);
