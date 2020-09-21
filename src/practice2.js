const inject = (items, sections) => {
  // TODO 没有必要重新声明，item有语义性
  let result = items;
  sections.sort((a, b) => a.index - b.index).forEach((it, i) => {
    result.splice(it.index + i, 0, it.content);
  });
  return result;
}
export { inject };
