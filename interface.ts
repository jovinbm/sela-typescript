import { IExt } from 'interfaceExt';

export const sampleInterface = (args: IExt): string => {
  return `${args.first_name} ${args.last_name}`;
};
