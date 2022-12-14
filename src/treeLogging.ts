import { Person } from "./personTypes";

/*
function logAllPeopleInTree(rootPerson)
    workStack = empty stack of Person objects
    push rootPerson onto workStack

        while workStack is not empty: 
        currentPerson = pop person off workStack
        log the name property of currentPerson
        push each element of currentPerson's children onto the workStack
*/
export function logAllPeopleInTree(topPerson: Person): void {
    const workStack: Person[] = []
    workStack.push(topPerson);
    while (workStack.length > 0) {
        let currentPerson = workStack.pop();
        if (currentPerson === undefined) {
            throw new Error("currePerson is unexpectedly undefined")
        }
        console.log(currentPerson.name)
        for (let child of currentPerson.children) {
            workStack.push(child)
        }
        //workStack.push(...currentPerson.children)


    }
    console.log("TODO!  First person is " + topPerson.name);
}

export function logAllPeopleInTreeWithQueue(topPerson: Person): void {
    const workStack: Person[] = []
    workStack.push(topPerson);
    while (workStack.length > 0) {
        let currentPerson = workStack.pop();
        if (currentPerson === undefined) {
            throw new Error("currePerson is unexpectedly undefined")
        }
        console.log(currentPerson.name)
        for (let child of currentPerson.children) {
            workStack.unshift(child)
        }
        //workStack.push(...currentPerson.children)


    }
    console.log("TODO!  First person is " + topPerson.name);
}

