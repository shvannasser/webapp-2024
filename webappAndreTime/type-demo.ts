import { Habit } from "./../hiof-webapp-2024/spa-ts/types"
type ID = string

const id: ID = "2"
console.log(id)

type HabitObject = {
  id: ID
  title: string
  //   createdAt: string | Date
}

const object: HabitObject = {
  id: "1",
  title: "title here",
  //   createdAt: new Date(),
}

type HabitArray = HabitObject[]

const habitArray: HabitArray = [object]

// <> is a generic type, gjør at hvis du endrer noe her så blir den endret andre steder for å unngå krasj.
type HabitTitle = Pick<HabitObject, "title">

// Omit fjerner en property fra en type, slik at den oppgir egen id
// Du kan omit flere properties ved å skrive flere properties i <>, f.eks. <HabitObject, "id" | "title">
type CreateHabitDTO = Omit<HabitObject, "id">

const createhabit = (data: CreateHabitDTO) => {
  return data
}

type FancyID = `${string}-${string}-${string}`

const fancyId: FancyID = "test-ny-streng"

type StudentMeta = { name: string; birthYear: number }
// Record er en type som tar to generics, en for key og en for value.
type StudentRecord = Record<FancyID, StudentMeta>
type Student = string | StudentRecord

const getStudent = async (
  students: Student[],
  id: FancyID
): Promise<StudentRecord | undefined | never> => {
  if (students.every((s) => typeof s === "string"))
    throw new Error("Can not locate user when all are strings")
  return students
    .filter((student) => typeof student !== "string")
    .find((student) => student[id])
}

const students: Student[] = [
  "lars",
  { "a-b-c": { name: "Frida", birthYear: 1992 } },
]

getStudent(students, "a-b-c").then((data) => console.log(data))

console.log("Hey")
