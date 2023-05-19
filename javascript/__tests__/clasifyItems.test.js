import clasifyItems from "../clasifyItems";
import clasifyItemsMock from "../__mocks__/clasifyItems.json";

const itemsTest = clasifyItemsMock.itemsTest;
const clasifyByTest = clasifyItemsMock.clasifyByTest;
const correctReturn = clasifyItemsMock.correctReturn;

test("1 - If I receive [] return []", () => {
  expect(clasifyItems([], [])).toEqual([]);
});

test("2 - If I not pass second parameter return []", () => {
  expect(clasifyItems(itemsTest, [])).toEqual([]);
});

test("3 - If I not pass first parameter return []", () => {
  expect(clasifyItems([], clasifyByTest)).toEqual([]);
});

test("4 - If I pass parameters correctly return an Array !== []", () => {
  expect(clasifyItems(itemsTest, clasifyByTest)).not.toEqual([]);
});

test("5 - If I pass parameters correctly return an Array with the correct format", () => {
  expect(clasifyItems(itemsTest, clasifyByTest)).toEqual(correctReturn);
});
