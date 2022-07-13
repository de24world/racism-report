export interface IData {
  key: number;
  value: IDataValue;
}

export interface IDataValue {
  id: number;
  useremail: string;
  offender: 'Black Mann' | 'Black Women' | 'Black Group' | 'White Mann' | 'White Women' | 'White Group' | 'Yellow Mann' | 'Yellow Women' | 'Yellow Group';
  victim: 'Black Mann' | 'Black Women' | 'Black Group' | 'White Mann' | 'White Women' | 'White Group' | 'Yellow Mann' | 'Yellow Women' | 'Yellow Group';
  place: string;
  evidence: string;
  occurDate: string;
  level: number;
  createdDate?: string;
  description?: string;
  submitTime: string;
  like?: string;
}

export interface IUser {
  displayName: any;
  email: string;
  uid: string;
}
