


const Table = ({studentsData,getRollno,getrollnoEdit}) => {
    
    const onDeleteButton = (event) => {
        getRollno(event.target.name);
    }

    const editButton = (event) => {
        getrollnoEdit(event.target.name);
    }

    return (
        <table className="table m-6 p-6">
            <thead>
                <tr>
                    <th>S.N</th>
                    <th>Roll No</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Faculty</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                 {studentsData.map((student,key) => {
                       let i = key + 1;
                       return (
                           <tr key={student.id}>
                               <td>{i}</td>
                               <td>{student.rollno}</td>
                               <td>{student.name}</td>
                               <td>{student.address}</td>
                               <td>{student.faculty}</td>
                               <td>
                                   <button name={student.id} className="button is-danger" onClick={onDeleteButton}>Delete</button>
                                   <button name={student.id} className="button is-primary ml-4" onClick={editButton}>Edit</button>
                               </td>
                           </tr>
                       )
                 })}
            </tbody>
        </table>
    )
}

export default Table;