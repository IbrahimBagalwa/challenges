const googleSearch = require("./googleSearch");
const mockDb = ["jbrish.com", "jd.com", "jdhdiahsl.com", "iou9ie.com"];

describe("Google search function", () => {
  it("It google search", () => {
    expect(googleSearch("testtest", mockDb)).toEqual([]);
    expect(googleSearch("jd", mockDb)).toEqual(["jd.com", "jdhdiahsl.com"]);
  });

  it("Work with undefined and null", () => {
    expect(googleSearch(undefined, mockDb)).toEqual([]);
    expect(googleSearch(null, mockDb)).toEqual([]);
  });
  it("Does not return more than three items", () => {
    expect(googleSearch(".com", mockDb).length).toEqual(3);
  });
});
