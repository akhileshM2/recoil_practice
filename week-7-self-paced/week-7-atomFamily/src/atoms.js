import { atomFamily } from "recoil";
import { TODOS } from "./todo";

export const todoFamily = atomFamily({
    key: "todoFamily",
    default: (id) => {
        return TODOS.find(x => x.id === id)
    }
});