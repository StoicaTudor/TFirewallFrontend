export function listEnumStringValues(myEnum: any): string[] {
  return Object.keys(myEnum)
    .filter(enumMember => isNaN(Number(enumMember))) // Filter out numeric keys
    .map(enumMember => myEnum[enumMember]) // Map to the string values
}

export function stringToEnum<T>(enumObject: T, value: string): T[keyof T] | undefined {
  // Use Object.values to get all enum values and check if the provided value matches any of them
  const enumValue = listEnumStringValues(enumObject).find(enumMember => enumMember === value)
  return enumValue as T[keyof T] | undefined // Cast to the enum type or return undefined
}

export function isNullOrEmpty(value: any): boolean {
  return value === null || value === undefined || (typeof value === 'string' && value.trim() === '')
}
