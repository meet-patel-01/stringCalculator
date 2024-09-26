export function CheckNonNumberString() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: string[]) {
      const filter = args[0].match(/\d+/g);
      if (filter?.length) {
        return originalMethod.apply(this, args);
      }
      return 0;
    };

    return descriptor;
  };
}
