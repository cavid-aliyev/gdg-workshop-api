export type QueryParamValue<T = string | number | boolean> = T | T[] | undefined;

declare namespace HttpModel {
  export interface IRequestPayload {
    [key: string]: Record<string, unknown>;
  }

  export interface IRequestParamsPayload {
    [key: string]: QueryParamValue;
  }
}

export type { HttpModel };
