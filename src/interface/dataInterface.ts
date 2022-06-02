export interface IData {
  key: number;
  value: IDataValue;
}

export interface IDataValue {
  id: number;
  useremail: string;
  offender: 'Black Mann' | 'Black Women' | 'White Mann' | 'White Women' | 'Yellow Mann' | 'Yellow Women';
  victim: 'Black Mann' | 'Black Women' | 'White Mann' | 'White Women' | 'Yellow Mann' | 'Yellow Women';
  date: string;
  place: string;
  // change to time type
  // country: string;
  // countryCode: string;
  // city: string;
  evidence: string;
  occurDate: string;
  level: number;
  createdDate?: string;
  description?: string;
  submitTime: string;
}

export interface IUser {
  displayName: any;
  email: string;
  uid: string;
}
