export declare type Todo = {
    id: string;
    name: string;
    done: Boolean;
};
import { AppSyncResolverEvent } from "aws-lambda";
export declare function handler(event: AppSyncResolverEvent<any>): Promise<Todo | {
    id: string;
    title: string;
    done: boolean;
}[] | null>;
