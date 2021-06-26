import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function UserEdit(props) {
    
    const [role, setRole] = useState([]);

    useEffect(() => {
        getRole()
    },[])

    const getRole = async () => {
        const response = await axios.get(`/api/user/${props.match.params.id}`);
        setRole(response.data.role)
    }

    return (
        <div>
            <h1>User編集ページ</h1>

             <input type='text' name="rol_id" defaultValue={role.rol_id} /><br />
             <input type='text' name="rol_name" defaultValue={role.rol_name} />
            <Link to={`/user/editdone/${role.rol_id}` + "?id=5"}>
                編集完了
            </Link>
        </div>
    );
}
export default UserEdit;