const inject = (items, sections) => {
  let result = items;
  sections.sort((a, b) => a.index - b.index).forEach((it, i) => {
    result.splice(it.index + i, 0, it.content);
  });
  return result;
}
export { inject };
