export interface IUser{
    id?:number;
    first_name:string;
    last_name:string;
    user_name:string;
    email:string;
    status:number;
    password_hash:string;
}

export interface IResponse{
    success?:string;
    data?:Array<IUser>|Array<ITask>;
    error?:string;
    status:number;
}

export interface ITask{
    id?:number;
    task_name:string;
    description:string;
    deadline:Date;
    user_id?:number;
    status:number;
    created_at?:string;
    updated_at?:string;
        
}