const studentName = "Shvan"

const lars = {
  name: studentName,
  birthYear: 1992,
  isNew: false,
  role: "student",
}

lars.name

const students = [
  lars,
  {
    name: "Trude",
    birthYear: 1991,
    isNew: true,
    role: "admin",
  },
  {
    name: "Ali",
    birthYear: 1989,
    isNew: true,
    role: "superadmin",
  },
  {
    name: "Simone",
    birthYear: 2001,
    isNew: true,
    role: "student",
  },
]

const getStudentAboveBirthYear = (students = [], birthYear) => {
  return students.filter((student) => student.birthYear > birthYear)
}

const studentsAbove = getStudentAboveBirthYear(students, 1991)

console.log(studentsAbove)

// const transformStudents = (students) => students.map(student => ({
//     ...student,
//     age: new Date().getFullYear() - student.birthYear
// }))

// another way of doing it bellow.

const transformStudents = (students) =>
  students.map((student) => ({
    ...student,
    age: new Date().getFullYear() - student.birthYear,
  }))

const studentsWithAge = transformStudents(students)

console.log(studentsWithAge)

const findStudent = (students, name) => {
  return students.find(
    (student) => student.name.toLowerCase() === name?.toLowerCase()
  )
}

const studentFound = findStudent(students, "shvan")

console.log(studentFound)

const roles = ["admin", "superadmin"]

const hasAccess = (roles, students) => {
  return students.filter((student) => {
    return roles.includes(student.role)
  })
}

const adminRoles = hasAccess(["admin"], students)
const studentRoles = hasAccess(["student"], students)
const adminOrSuperAdmins = hasAccess(["admin", "superadmin"], students)

// const omitName = (students) => {
//   return students.map((student) => {
//     const { name, ...rest } = student
//     return rest
//   })
// }

// kortere måte å gjøre omitName på, under.
const omitName = (students) => students.map(({ name, ...rest }) => rest)
const studentNameOmitted = omitName(students)

// console.log(studentNameOmitted)

const studentCopy = [...students]

studentCopy[1].name = "Name changed"
console.log(students)
console.log(studentCopy)

const larsCopy = { ...lars }
larsCopy.name = "Shvan Changes"
console.log(lars)
console.log(larsCopy)

const hiofLocation = {
  name: "HIOF",
  street: "Haldenveien 1",
  postal: "1520",
  contact: {
    email: "halden@email.no",
  },
}

const hiofLocationdDeep = structuredClone(hiofLocation)
console.log(hiofLocationdDeep)

// hvis vi ønsker å legge til hiofLocation til lars objektet, kan vi gjøre det på denne måten.
// vi setter location til før hiofLocation objektet så ikke hiof navnet overskrider lars navnet "Shvan".
const studentWithHiofData = {
  ...lars,
  location: hiofLocation,
}

console.log(studentWithHiofData)
