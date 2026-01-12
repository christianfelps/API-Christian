import { ApiError } from "./ApiError";

export class NOT_FOUND  extends ApiError{
    public readonly message: string;
    public readonly statusCode: number;

    constructor(message: string, statusCode = 404) {
       super(message, statusCode);
        this.message = message;
       this.statusCode = statusCode;
    
    }

}