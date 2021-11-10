export const reducer = (stateInitial = [], action) => 
{        console.log(action)
    switch (action.type) {

        case "true":
            return action
            break;
        case "false":
            return action
            break;
        default:
            return stateInitial;
            break;
    }
}