export const parameterAssembly = ({ ...args }) => {
  const result = [];
  for (let i in args) {
    if (i === "location") {
      result.unshift(`${args[i]}?`);
      args[i] = null;
    }
    if (args[i]) result.push(`${i}=${args[i]}`);
  }
  return result.reduce((pv, cv, i) => {
    return pv ? (i !== 1 ? `${pv}&${cv}` : `${pv}${cv}`) : `${cv}?`;
  });
};
