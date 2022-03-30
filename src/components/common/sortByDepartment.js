const sortByDepartment = (crew) => {
  return crew.reduce((acc, cur) => {
    const index = acc.findIndex((a) => a.department === cur.department);

    if (index > -1) {
      acc[index].data.push(cur);
    } else {
      acc.push({ department: cur.department, data: [cur] });
    }
    return acc.sort((a, b) =>
      a.department > b.department ? 1 : b.department > a.department ? -1 : 0
    );
  }, []);
};
export default sortByDepartment;
