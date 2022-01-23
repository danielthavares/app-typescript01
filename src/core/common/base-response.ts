import { FAILURE, SUCCESS } from "./base-messages";

class BaseResponse {

    ok: boolean;
    message: string;
    data: any;

    constructor(ok: boolean, message: string, data: any){
        this.ok = ok;
        this.message = message;
        this.data = data;
    }

    success() {
        return this.ok;
    } 

    getMessage(){
        return this.message;
    }

    getData(){
        return this.data;
    }
}

const successOnlyMessage = (message: string) =>
new BaseResponse(true, message, null);

const success = (data: any, message?: string) =>
new BaseResponse(true, message || SUCCESS, data);

const failureOnlyMessage = (message: string) =>
new BaseResponse(false, message || SUCCESS, null);

const failure = (data: any, message?: string) =>
new BaseResponse(false, message || FAILURE, data);

export{
    BaseResponse,
    successOnlyMessage,
    failureOnlyMessage,
    success,
    failure
}
