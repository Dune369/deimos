import мatchers from '../мatchers';

test('Сортировака по уровню жизни', () => {
  const play = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  const result = мatchers(play);
  expect(result).toEqual(expected);
});
