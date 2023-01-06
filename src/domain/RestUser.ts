export interface RestUser {
  signIn(email: string, password: string): Promise<any>
  signUp(form: any): Promise<any>
}

