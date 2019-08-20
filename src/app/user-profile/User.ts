export class User {
  private _id: number;
  private _name: string;
  private _firstname: string;
  private _age: number;
  private _quote: string;
  private _urlPic: string;

  constructor(id: number, name: string, firstname: string, age: number, quote: string, urlPic: string) {
    this._id = id;
    this._name = name;
    this._firstname = firstname;
    this._age = age;
    this._quote = quote;
    this._urlPic = urlPic;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get firstname(): string {
    return this._firstname;
  }

  set firstname(value: string) {
    this._firstname = value;
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    this._age = value;
  }

  get quote(): string {
    return this._quote;
  }

  set quote(value: string) {
    this._quote = value;
  }

  get urlPic(): string {
    return this._urlPic;
  }

  set urlPic(value: string) {
    this._urlPic = value;
  }



}
