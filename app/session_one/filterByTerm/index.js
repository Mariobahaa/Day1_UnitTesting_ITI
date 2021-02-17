export const filterByTerm = (inputArr, searchTerm) => {
  return inputArr.filter((arrayElement) => {
    return arrayElement.url.includes(searchTerm);
  });
};

// filterByTerm([{}, {}, {}], "link");
