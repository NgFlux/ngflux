export type SelectItem<T = any, V = any> = {
  label: string;
  value: V;
  children?: T[];
  disabled?: boolean;
};

export type SelectTransformer<T = any, V = any> = {
  getLabel(item: T): string;
  getValue(item: T): V;
  getChildren?(item: T): T[];
  setChildren?(item: T, children: T[]): void;
  isDisabled?(item: T): boolean;
};
