export const getRandomActivity = async (): Promise<any> =>
  await fetch('http://www.boredapi.com/api/activity/')
    .then((response) => response.json())
    .then((data) => data);
