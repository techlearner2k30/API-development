import addTodo from "./addTodo";
import getTodos from './getTodos';
import updateTodo from "./updateTodo";


export type Todo = {
    id: string,
    name : string,
    done : Boolean
}

import { AppSyncResolverEvent } from "aws-lambda";

export async function handler( event: AppSyncResolverEvent<any>){

    console.log('event => ', event);

    switch (event.info.fieldName){

        case 'getTodos':
            console.log('gettodos => ' , event.info.fieldName);
            return getTodos();

        case 'addTodo':
            console.log('addTodo => ' , event.info.fieldName);
            return addTodo(event.arguments.todo); // input is because in schema we have set todo as input object whch contains all the arguments

        case 'updateTodo':
            console.log('updateTodo => ' , event.info.fieldName);
            return updateTodo(event.arguments); // input is because in schema we have directly passed the arguments

        default : 
            console.log('default ');
            return null;

    }
}