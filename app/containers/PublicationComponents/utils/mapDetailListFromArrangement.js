const mapDetailList = (list, arrangement) => {
  let counter = 0;
  const detailArrangement = {};
  Object.keys(arrangement).map(key => {
    const sectionList = arrangement[key];
    const detailSectionList = sectionList.map(arr => {
      const newArr = [arr[0], list.slice(counter, counter + arr[1])];
      counter += arr[1];
      return newArr;
    });
    detailArrangement[key] = detailSectionList;
    return detailArrangement;
  });
  return detailArrangement;
};

export default mapDetailList;
