import { jokes } from "./static/data/jokes.json";

export const getJokeFooter = () => {
    let randNum = Math.floor(Math.random() * jokes.length);

    return jokes[randNum];
};