import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserDetail(props) {

    const [role, setRole] = useState([]);

    useEffect(() => {
        getRole()
    },[])

    const getRole = async () => {
        const response = await axios.get(`/api/user/${props.match.params.id}`);
        console.log(`/api/user/${props.match.params.id}`);
         setRole(response.data.role)

    }
    return (
        <div>
            <h1>User詳細ページ</h1>
            <p>{role.rol_id}</p>
            <p>{role.rol_name}</p>
        </div>
    );
}
export default UserDetail;