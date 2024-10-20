export class EnumUtils {
  public static getValues<T extends Record<string & number, number>>(enumType: T, valuesToRemove: number[] | undefined = undefined): number[] {
    const enumValues = Object.values(enumType).filter(value => typeof value === 'number') as number[];
    if (valuesToRemove) {
      return enumValues.filter(value => !valuesToRemove.includes(value));
    }
    return enumValues;
  }

  public static isEnumValue<T extends Record<string & number, number>>(enumObj: T, value: any): value is T[keyof T] {
    return Object.values(enumObj).includes(value);
  }
}
