import Form from './Components/Form'
import Table from './Components/Table';
import {useState} from 'react'



const Students = [
    {id:12,rollno:181743,name:"Srijan",faculty:"Software Engineering",address:"Manbhawan"},
]


const App = () => {
    const [students,setStudents] = useState(Students);
    const [editStudent,setEditStudent] = useState();


    const getData = (data) => {

        let objIndex = students.findIndex((obj) => obj.id === data.id)

        if(editStudent) {
            setStudents((prevState) => {
                prevState[objIndex] = data;
                return [...prevState]
            })
        }
        else{
            setStudents((prevState) => {
                return [data,...prevState];
            })
        }
    }

    const getID = (data) => {
         const filterArray = students.filter(student => {
             if(student.id != data) {
                 return student;
             }
         }) 
         setStudents(filterArray);
    }

    const getIdEdit = (data) => {
         const EditArray = students.filter(student => {
             if(student.id == data){
                 return student;
             }
         })
         setEditStudent(EditArray);
    }

    return (
     <>  
         <Form getStudentInfo={getData} editStudent={editStudent}/>
         <Table studentsData={students} getRollno={getID} getrollnoEdit={getIdEdit}/>
      </>
    )
}


export default App;