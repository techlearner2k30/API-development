export default function getTodos(){

    console.log('function ' , 'getTodos');

    type Todo1 = {
        id: string;
        title: string;
        done: boolean;
    }

    const todos : Todo1[] = [
        {
            id: "1",
            title: "title1",
            done: true,
        },
        {
            id: "2",
            title: "title2",
            done: false
        }
    ];

    return todos;


}