export interface Roles {
    reader: boolean;
    admin?: boolean;
}

export class CustomUser {
    email: string;
    roles: Roles;

    constructor(authData){
        this.email = authData.email;
        this.roles = {
            reader: true
        }
    }
}