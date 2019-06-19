export interface ISampleInterfaceArgs {
  first_name: string;
  middle_name?: string | number;
  last_name: string;
}

export interface ISchema {
  title?: string;
  properties?: {
    [k: string]: ISchema;
  };
}
