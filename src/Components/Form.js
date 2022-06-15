import { useEffect, useState} from 'react';


const Form = ({getStudentInfo,editStudent}) => {
     
    const [userDate, setUserData] = useState({
        name: '',
        faculty: '',
        rollno: '',
        address: ''
    })
   
     useEffect(() => {
        if(editStudent){
            setUserData({
                name:editStudent[0].name,
                faculty:editStudent[0].faculty,
                rollno:editStudent[0].rollno,
                address:editStudent[0].address
              });
        }
     },[editStudent])


    const onNamechange = (event) => {
        setUserData((prevState) => {
            return { ...prevState, name: event.target.value }
        })
    }

    const onFacultychange = (event) => {
        setUserData((prevState) => {
            return { ...prevState,faculty: event.target.value }
        })
    }

    const onRollnochange = (event) => {
        setUserData((prevState) => {
            return { ...prevState, rollno: event.target.value }
        })
    }

    const onAddressnochange = (event) => {
        setUserData((prevState) => {
            return { ...prevState, address: event.target.value }
        })
    }

    const onsubmit = (event) => {
        event.preventDefault();
        setUserData({
            name: '',
            faculty: '',
            rollno: '',
            address: ''
        })
        if(editStudent){
            getStudentInfo({id:editStudent[0].id,...userDate});
        }else{
            getStudentInfo({id:Math.random(),...userDate});
        } 
    }

    return (
        <div className="container mt-6">
            <div className="row">
                <form onSubmit={onsubmit}>
                    <div className="columns">
                        <div className="column is-one-third">
                            <div className="field">
                                <label className="label">Name</label>
                                <div className="control">
                                    <input className="input" value={userDate.name} name="name" type="text" placeholder="Enter name" onChange={onNamechange} />
                                </div>
                            </div>
                        </div>
                        <div className="column is-one-third">
                            <div className="field">
                                <label className="label">Faculty</label>
                                <div className="control">
                                    <input className="input" name="faculty" value={userDate.faculty} type="text" placeholder="Enter faculty" onChange={onFacultychange} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column is-one-third">
                            <div className="field">
                                <label className="label">Roll No</label>
                                <div className="control">
                                    <input className="input" value={userDate.rollno} name="rollno" type="Number" min="1" placeholder="Enter rollno" onChange={onRollnochange} />
                                </div>
                            </div>
                        </div>
                        <div className="column is-one-third">
                            <div className="field">
                                <label className="label">Address</label>
                                <div className="control">
                                    <input className="input" value={userDate.address} name="address" type="text" placeholder="Enter address" onChange={onAddressnochange} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="control">
                        <button type="submit" className="button is-link">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form;