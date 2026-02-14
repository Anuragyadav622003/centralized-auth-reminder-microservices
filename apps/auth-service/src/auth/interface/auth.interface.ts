export  interface ApiResponse<T>{
    success:boolean,
    message?:string,
    data?:T,
    error?:{
        code:string,
        message?:string,
        details?:any
    },
    meta?:{
    requestId: string;          // for tracing
    timestamp: string;
    service: string;
    }
    

}


