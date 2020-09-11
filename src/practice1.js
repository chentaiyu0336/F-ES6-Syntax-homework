const parseData = (input) => {
  let { data, column } = input;
  let result = [];
  data.forEach(item => {
    let temp = {};
    column.forEach((val, index) => {
      temp[val.name] = item[index];
    })
    result.push(temp);
  });
  return result;
}
export { parseData };
