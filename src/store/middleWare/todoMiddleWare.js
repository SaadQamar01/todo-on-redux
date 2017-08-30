import ActionTodo from "./../action/todo.js";

//Update in counter 13 -- create Middleware
export default class TodoMiddleware {

    //Update in counter 13 -- This function will be called 
    static asyncAddTodo(item) {
        // console.log("test ",data);
        return (dispatch) => {
            // My Business logic Here
            // data = data * 2;
            dispatch(ActionTodo.addTodo(item));
        }
    }
        static asyncDeleteTodo(index) {
        // console.log("test ",data);
        return (dispatch) => {
            // My Business logic Here
            // data = data * 2;
            dispatch(ActionTodo.deleteTodo(index));
        }
    }
        static asyncDeleteAllTodo() {
        // console.log("test ",data);
        return (dispatch) => {
            // My Business logic Here
            // data = data * 2;
            dispatch(ActionTodo.deleteAllTodo());
        }
    }
}
