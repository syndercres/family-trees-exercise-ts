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

export function logAllPeopleInTreeWithQueue(topPerson: Person): string[] {
    const finalList = []
    const workStack: Person[] = []
    workStack.push(topPerson);
    while (workStack.length > 0) {
        let currentPerson = workStack.pop();
        if (currentPerson === undefined) {
            throw new Error("currePerson is unexpectedly undefined")
        }
        finalList.push(currentPerson.name)
        for (let child of currentPerson.children) {
            workStack.unshift(child)
        }
        //workStack.push(...currentPerson.children)


    }
    console.log("TODO!  First person is " + topPerson.name);
    console.log("count of the tree is " + finalList.length);
    return finalList;

}

export function findGivenPerson(person: string, topPerson: Person) {
    const peopleList = logAllPeopleInTreeWithQueue(topPerson);
    if (peopleList.includes(person)) {
        return `FOUND <${person}>!`
    } else {
        return `No such person found: <${person}>`
    }
};

export function findDescendent(A: string, B: string, topPerson: Person) {
    const workStack: Person[] = []
    workStack.push(topPerson);
    while (workStack.length > 0) {
        let currentPerson = workStack.pop();
        if (currentPerson === undefined) {
            throw new Error("currePerson is unexpectedly undefined")
        }
        if ((currentPerson.name === B) && (currentPerson.children.map(person => person.name).includes(A))) {
            return true
        }
        for (let child of currentPerson.children) {
            workStack.unshift(child)
        }


    }
    return false
}

