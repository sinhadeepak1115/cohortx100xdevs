function doSomething(cb2: (str: string, num: number) => string): string {
  const x = cb2("2", 2)
  return "1";
}
console.log(doSomething(cb2))
