"use strict";
// *******************PARTIAL Utility Type **********************//
const updateAssignment = (assignment, propsToUpdate) => {
    return Object.assign(Object.assign({}, assignment), propsToUpdate);
};
const studentGrade = {
    studentId: '12323232323',
    title: 'Mr Martin',
    grade: 32323,
    // verified: false
};
console.log(updateAssignment(studentGrade, { grade: 12 }));
const assignGraded = updateAssignment(studentGrade, { grade: 5 });
// ******************* Required Utility Type ********************//
const recordAssignment = (assignment) => {
    // Send to database e.t.c
    return assignment;
};
// ******************* Readonly Utility Type ********************//
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
// assignVerified.grade = 4; // Error, assignVerified is read only
// recordAssignment(assignGraded);  // Error, assignGraded has a 'verified' prop as an optional value
recordAssignment(Object.assign(Object.assign({}, assignGraded), { verified: true }));
// ******************* Record Utility Type ********************//
const hexColorMap = {
    red: '#ff0000',
    green: '#00ff00',
    blue: '#0000ff',
};
const finalGrades = {
    Sara: 'B',
    Kelly: 'C'
};
const gradeData = {
    Sara: { assign1: 65, assign2: 0 },
    Kelly: { assign1: 0, assign2: 434 }
};
const score = {
    studentId: 'k123',
    grade: 86
};
console.log(score);
const preview = {
    studentId: 'k123',
    title: 'Final Project',
};
console.log(preview);
// ******************* ReturnType  Utility Type ********************//
// type newAssign = { title: string, points: number }
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign('Utility types', 1000);
console.log(tsAssign);
const assignArgs = ['Generics', 100];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
// ******************* Awaited Utility Type ******************** //
