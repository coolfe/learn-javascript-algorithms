const queue = [];

queue.push(1);
queue.push(2);

const item1 = queue.shift(); // 1
const item2 = queue.shift(); // 2

export default {
  item1,
  item2
};
