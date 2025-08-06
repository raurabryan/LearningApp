import { Course } from "../model/Course";
import { Student } from "../model/Student";

export const learningData : Course={
    id: 1,
    name: "Angular Basico",
    students: [
        {
            id: 1,
            identification: "ID001",
            name: "Lorenzo",
            surname: "Aguliar"
        },
        {
            id: 2,
            identification: "ID002",
            name: "Julio ",
            surname: "Jaramillo"
        },
        {
            id: 3,
            identification: "ID003",
            name: "Moises",
            surname: "Caicedo"
        },
        {
            id: 4,
            identification: "ID004",
            name: "Wiliam",
            surname: "Pacho"
        }
    ]

}