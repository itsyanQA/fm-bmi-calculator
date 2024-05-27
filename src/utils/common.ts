export function getUrlSearchParamsAsObject(params: URLSearchParams) {
  const result: { [index: string]: string } = {};

  for (const [key, value] of params.entries()) {
    result[key as string] = value;
  }
  return result;
}
