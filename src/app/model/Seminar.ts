import { Person } from "./Person";

export class Seminar {
    teacher: Person | null = null;
    attendees: Person[] = [];

    constructor(
        public id: number,
        public name: string,
        public venue: string,
        public date: Date
    ) { };
}