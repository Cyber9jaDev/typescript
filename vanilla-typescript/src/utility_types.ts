// *******************PARTIAL Utility Type **********************//

interface Assignment{
  studentId: string,
  title: string,
  grade: number,
  verified?: boolean
}

const updateAssignment = (assignment: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
  return {
    ...assignment, ...propsToUpdate
  }
}

const studentGrade: Assignment = {
  studentId: '12323232323',
  title: 'Mr Martin',
  grade: 32323,
  // verified: false
}

console.log(updateAssignment( studentGrade, { grade: 12 } ));

const assignGraded: Assignment = updateAssignment(studentGrade, { grade: 5 });

// ******************* Required Utility Type ********************//

const recordAssignment = (assignment: Required<Assignment>): Assignment => {
  // Send to database e.t.c
  return assignment;
}

// ******************* Readonly Utility Type ********************//

const assignVerified: Readonly<Assignment> = {
  ...assignGraded, verified: true
}

// assignVerified.grade = 4; // Error, assignVerified is read only
// recordAssignment(assignGraded);  // Error, assignGraded has a 'verified' prop as an optional value
recordAssignment({...assignGraded, verified: true});


// ******************* Record Utility Type ********************//
const hexColorMap: Record<string, string>  = {
  red: '#ff0000',
  green: '#00ff00',
  blue: '#0000ff',
}

type Students = 'Sara' | 'Kelly';
type LetterGrades = 'A' | 'B' | 'C' | 'D' | 'U';

const finalGrades: Record<Students, LetterGrades> = {
  Sara: 'B',
  Kelly: 'C'
}

interface Grades{
  assign1: number,
  assign2: number
}

const gradeData: Record<Students, Grades> = {
  Sara: { assign1: 65, assign2: 0 },
  Kelly: { assign1: 0, assign2: 434 }
}

// ******************* Pick Utility Type ********************//
type AssignResult = Pick<Assignment, 'studentId' | 'grade'> 

const score: AssignResult = {
  studentId: 'k123',
  grade: 86
}
console.log(score);

// ******************* Omit Utility Type ********************//
type AssignPreview = Omit<Assignment, 'grade' | 'verified'>

const preview: AssignPreview = {
  studentId: 'k123',
  title: 'Final Project',
}

console.log(preview);

// ******************* Exclude and Extract Utility Type ********************//
type adjustedGrade = Exclude<LetterGrades, 'U'>

type highGrades = Extract<LetterGrades, 'A' | 'B'>


// ******************* NonNullable Utility Type ********************//
type AllPossibleGrades = 'Dave' | 'John' | null | undefined

type NamesOnly = NonNullable<AllPossibleGrades>

// ******************* ReturnType  Utility Type ********************//
// type newAssign = { title: string, points: number }

const createNewAssign = (title: string, points: number) => {
  return { title, points }
}

type newAssign = ReturnType<typeof createNewAssign>
const tsAssign: newAssign = createNewAssign('Utility types', 1000);
console.log(tsAssign);

// ******************* Parameter Utility Type ******************** //
type AssignParams = Parameters<typeof createNewAssign>

const assignArgs: AssignParams = ['Generics', 100];

const tsAssign2: newAssign = createNewAssign(...assignArgs);
console.log(tsAssign2);

// ******************* Awaited Utility Type ******************** //
