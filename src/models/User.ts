import { Insurance } from "./Insurance";

export interface User {
    id?: number;
    firstName: string;
    lastName: string;
    insurance?: Insurance
}

