export interface Service {
  name: string;
  rating: number;
}

/**
 * Returns the top 3 services sorted by rating (descending).
 * 
 * Problem Solving Explanation:
 * - We clone the array so we don't mutate the original input.
 * - We sort the clone by rating descending (highest first).
 * - Then we slice the top 3 elements to get our winners.
 *
 * param services Array of services to process.
 * returns Array of top 3 services sorted by rating descending.
 */
export function getTop3Services(services: Service[]): Service[] {

  const clonedServices = [...services];

  clonedServices.sort((a, b) => b.rating - a.rating);

  return clonedServices.slice(0, 3);
}
