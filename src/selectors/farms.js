export function findFarm(farms, searchedId) {
  const farm = farms.find((testedFarm) => {
    return testedFarm.id === searchedId;
  });
  return farm;
}
