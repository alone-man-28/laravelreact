// import React from 'react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


function UserDelete(props) {
    const [role, setRole] = useState([]);

    useEffect(() => {
        getRole()
    },[])

    const getRole = async () => {
        const response = await axios.get(`/api/user/delete/${props.match.params.id}`);
        window.alert("削除完了しました");
        window.location.href = 'https://todo_list/#/user';
    }
    return (
        <div>
        </div>
    );
}
export default UserDelete;