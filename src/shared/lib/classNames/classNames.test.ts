import { classNames } from "./classNames";

describe("classNames utility function", () => {
  test("should return the base class when only one parameter is provided", () => {
    expect(classNames("someClass")).toBe("someClass");
  });

  test("should include additional classes when provided", () => {
    const expected = "someClass class1 class2";
    expect(classNames("someClass", {}, ["class1", "class2"])).toBe(expected);
  });

  test("should include classes from mods when their values are truthy", () => {
    const expected = "someClass class1 class2 hovered scrollable";
    expect(classNames("someClass", { hovered: true, scrollable: true }, ["class1", "class2"])).toBe(
      expected
    );
  });

  test("should exclude classes from mods when their values are false", () => {
    const expected = "someClass class1 class2 hovered";
    expect(
      classNames("someClass", { hovered: true, scrollable: false }, ["class1", "class2"])
    ).toBe(expected);
  });

  test("should exclude classes from mods when their values are undefined", () => {
    const expected = "someClass class1 class2 hovered";
    expect(
      classNames("someClass", { hovered: true, scrollable: undefined }, ["class1", "class2"])
    ).toBe(expected);
  });

  test("should handle empty additional classes and mods gracefully", () => {
    const expected = "someClass";
    expect(classNames("someClass", {}, [])).toBe(expected);
  });

  test("should handle no additional classes and mods gracefully", () => {
    const expected = "someClass";
    expect(classNames("someClass")).toBe(expected);
  });

  test("should handle mods with mixed truthy and falsy values", () => {
    const expected = "someClass hovered";
    expect(classNames("someClass", { hovered: true, scrollable: false, visible: "" }, [])).toBe(
      expected
    );
  });

  test("should handle additional classes with falsy values", () => {
    const expected = "someClass class1";
    expect(classNames("someClass", {}, ["class1", "", null, undefined])).toBe(expected);
  });
});
