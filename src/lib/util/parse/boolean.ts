function toString(value: boolean): string {
  return value + "";
}

function fromString(value: string | null | undefined): boolean {
  return value && value.trim().toLowerCase() === "true" ? true : false;
}

export default { toString, fromString };
