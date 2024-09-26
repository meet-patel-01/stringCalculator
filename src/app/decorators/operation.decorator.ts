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

export function CheckSingleNumberString() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: string[]) {
      const filter = args[0].match(/\d+/g);
        console.log('>>', filter);
      if (filter && filter.length > 1) {
        return originalMethod.apply(this, args);
      }
      return filter ? +filter[0] : 0;
    };

    return descriptor;
  };
}
