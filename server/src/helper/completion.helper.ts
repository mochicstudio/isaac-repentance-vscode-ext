const GetEnumsArray = (enumTypes: any, completionKind: any) => {
  return enumTypes.map((enumType: [string, any]) => {
    return {
      label: enumType[0],
      kind: completionKind,
      data: enumType[1]
    };
  });
};

const GetNoNumbersKeys = (keys: any[]) => {
  return keys.filter((key) => {
    return isNaN(Number(key));
  });
};

const GetEnumMembersArray = (enumType: any, completionKind: any) => {
  type EnumTypeKeys = keyof typeof enumType;
  const enumTypeKeys = Object.keys(enumType) as EnumTypeKeys[];
  const enumTypeNoNumbersKeys = GetNoNumbersKeys(enumTypeKeys);

  return enumTypeNoNumbersKeys.map((enumMember, index) => {
    return {
      label: enumTypeNoNumbersKeys[index],
      kind: completionKind,
      data: enumType[enumMember] + ''
    };
  });
};

export {
  GetEnumsArray,
  GetEnumMembersArray,
};