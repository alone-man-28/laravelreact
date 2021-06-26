import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function User() {

    const [roles, setUsers] = useState([]);

    useEffect(() => {
        getUsers()
    },[])

    const getUsers = async () => {
        const response = await axios.get('/api/user');
        setUsers(response.data.roles)
    }

    return (
        <div>
            <button class="bg-indigo-700 font-semibold text-white py-2 px-4 rounded">ボタン</button>
            <h1>Userページ</h1>
            <ul>
                {
                roles.map((role) => 
                <li key={role.rol_id}>
                    {role.rol_id}
                    {role.rol_name}
                    <Link to={`/user/${role.rol_id}`}>
                        詳細
                    </Link>
                    <Link to={`/user/edit/${role.rol_id}`}>
                        編集
                    </Link>
                    <Link to={`/user/delete/${role.rol_id}`}>
                        削除
                    </Link>
                </li>)
                }
                
            </ul>
        </div>
    );

}
export default User;