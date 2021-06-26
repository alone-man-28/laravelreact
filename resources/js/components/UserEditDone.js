import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function UserEditDone(props) {

    const [role, setRole] = useState([]);

    useEffect(() => {
        getRole()
    },[])

    const getRole = async () => {
        const response = await axios.get(`/api/user/editdone/${props.match.params.id}`);
        window.alert("更新しました");
        window.location.href = 'https://todo_list/#/user';

    }
    return (
        <div>
        </div>
    );
}
export default UserEditDone;