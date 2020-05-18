export class RegisterDto {
  fullName: string;
  mobile: string;
  email: string;
  registrationType: string;
  numberOfTickets: number;

  constructor(
    fullName: string,
    mobile: string,
    email: string,
    registrationType: string,
    numberOfTickets: number
  ) {
    this.fullName = fullName;
    this.mobile = mobile;
    this.email = email;
    this.registrationType = registrationType;
    this.numberOfTickets = numberOfTickets;
  }
}
