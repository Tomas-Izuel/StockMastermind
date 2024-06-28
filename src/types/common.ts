export type CommonSearchParams = Record<string, string>;

export type ErrorType = {
  code: number;
  message: string;
  detailedCause?: any;
};

export interface TableKeys {
  key: string;
  label: string;
  allowsSorting: boolean;
  align?: "center" | "start" | "end";
}

export interface CommonDataPaginated<T> {
  rows: T[];
  total: number;
  page: number;
  pageSize: number;
}
