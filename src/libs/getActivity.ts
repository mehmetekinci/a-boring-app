import Activity from '@/types/Activity';

export const getRandomActivity = async (): Promise<Activity> =>
  await fetch('http://www.boredapi.com/api/activity/')
    .then((response) => response.json())
    .then((data) => data);

export const getActivity = async (
  type: string,
  participants: number,
  prices: [number, number],
  accessibilities: [number, number]
): Promise<Activity> =>
  await fetch(
    `https://www.boredapi.com/api/activity?type=${type}&participants=${participants}&minprice=${prices[0]}&maxprice=${prices[1]}&minaccessibility=${accessibilities[0]}&maxaccessibility=${accessibilities[1]}`
  )
    .then((response) => response.json())
    .then((data) => data);
