/**
 * @param {object[]} items
 * @param {object[]} clasifyBy
 * @returns {object[]}
 */
function clasifyItems(items = [], clasifyBy = []) {
  const result = [];

  clasifyBy.forEach((item) => {
    const newItem = {
      title: item.title,
      items: [],
    };
    items.forEach((innerItem) => {
      if (item?.itemsToFilter?.includes(innerItem.name)) {
        newItem.items.push(innerItem);
      }
    });
    newItem.items.length > 0 && result.push(newItem);
  });

  return result;
}

export default clasifyItems;
