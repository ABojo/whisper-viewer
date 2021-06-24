const formatAge = (age) => {
  if (age === 15) return '15-17';
  if (age === 18) return '18-20';
  if (age === 21) return '21-25';
  if (age === 26) return '26-29';
  if (age === 30) return '30-35';
  if (age === 36) return '36-44';
  if (age === 45) return '45+';

  return age;
};

export default formatAge;
