export class User {

    organisation: string;
    password: string;
    isAdmin: boolean;

    constructor(
        public id: number,
        public email: string
    ){}

    toggleAdmin() {
        this.isAdmin = !this.isAdmin;
    }

}
