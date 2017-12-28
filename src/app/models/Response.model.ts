export class Response {

    public message: string;
    public error: boolean;
    public payload: any;

    constructor () {}

    static reponseError(): Response {
         const res: Response = new Response();
         res.error = true;
         res.message = 'There is not internet connection';
         return res;
    }
}

