import _ from "lodash";

export default function throwDice(): any {
    return {
        computer: Math.floor(Math.random() * 10 + 2),
        user: Math.floor(Math.random() * 10 + 2),
    };
}
