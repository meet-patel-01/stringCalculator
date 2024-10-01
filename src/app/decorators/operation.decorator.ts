export function CheckNonNumberString() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: string[]) {
      const filter = args[0].match(/-?\d+(\.\d+)?/g);

      if (filter) {
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
      const filter = args[0].match(/-?\d+(\.\d+)?/g);

      if (filter && filter.length > 1) {
        return originalMethod.apply(this, args);
      }
      return filter ? +filter[0] : 0;
    };

    return descriptor;
  };
}

export function CheckNegativeNumberString() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: string[]) {
      const filter = args[0].match(/-\d+/g);
      if (filter && filter.length > 0) {
        return `negative numbers not allowed ${filter.join(', ')}`
      }
      return originalMethod.apply(this, args);
    };

    return descriptor;
  };
}

export function FilterNumberString() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: string[]) {
      const filter = args[0].replace(/[^0-9.[0-9]]/g, '');

      if (filter) {
        return originalMethod.apply(this, [filter]);
      }
      return filter ? +filter[0] : 0;
    };

    return descriptor;
  };
}
