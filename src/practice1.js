// TODO 试着尝试一下reduce
const parseData = (input) => {
  // TODO 解构可以优化到函数接受参数中
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
