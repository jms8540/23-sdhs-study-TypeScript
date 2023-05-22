// const data2: Array<number> = [1, 2, 3, 4, 5];
// const data2: Array<number> = [1, 2, 3, 4, 5];
const data2: number[] = [1, 2, 3, 4, 5];
// const data2: any = [1, 2, 3, 4, 5]; 닌자코드..

// const mixData2: Array<number | string> = [1, 2, 3, 4, "5"];
const mixData2: (number | string)[] = [1, 2, 3, 4, "5"];

const mapData2 = data2.map((v) => {
  return v;
});

const mixMapData2 = mixData2.map((v) => {
  const temp = v;
  const toStringData = String(temp);
  return toStringData.length;
});
