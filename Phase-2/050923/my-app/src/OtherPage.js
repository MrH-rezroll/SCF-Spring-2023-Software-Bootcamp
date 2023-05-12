import logo from './logo.svg';
import './App.css';


const students = [
    {
        'id': 1,
        'fName': 'Steve',
        'lName': 'Stevenson',
        'dob': "12-09-1982"
    },
    {
        'id': 2,
        'fName': 'Bob',
        'lName': 'Boby-Jo',
        'dob': "12-10-1982"
    },
    {
        'id': 3,
        'fName': 'Guy',
        'lName': 'Fartington',
        'dob': "12-09-1984"
    }
];
const studentList = students.map((student) => (
    <li key={student.id} id={student.id}>{student.fName} {student.lName}; dob: {student.dob}</li>
));

function OtherPage(){
 
    return (
        <ul>
            {studentList}
        </ul>
    );
 } 

export default OtherPage;
