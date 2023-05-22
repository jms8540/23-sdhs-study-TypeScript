const data = [];
const data1 = [1, 2, 3, 4, 5];
const mixData = [1, 2, 3, 4, "5"];

const mapData = data1.map((v) => {
  return v;
});

const mixMapData = mixData.map((v) => {
  return v.length;
});
