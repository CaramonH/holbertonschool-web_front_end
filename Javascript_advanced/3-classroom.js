const createClassRoom = (numberOfStudents) => {
    const studentSeat = (seat) => {
        return () => {
            return seat;
        }
    }
    const students = [];
    for(let i = 0; i< numberOfStudents; i++) {
        students.push(studentSeats(i + 1));
    }

    return students;
}

const classRoom = createClassRoom(10);
