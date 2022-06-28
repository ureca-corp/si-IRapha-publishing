export class AttributeMapper {
  parseCustomAttributeOptions = (htmlAttribute) => {
    return htmlAttribute
      .replace(" ", "")
      .split(";")
      .reduce((acc, curr) => {
        const data = curr.split(":");

        return {
          ...acc,
          [data[0]]: data[1],
        };
      }, {});
  };
}
