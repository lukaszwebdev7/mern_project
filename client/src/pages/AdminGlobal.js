import React, { useEffect, useState } from 'react';
import { AdminSetup } from '../components/AdminSetup';
import { Login } from '../components/Login';

const AdminGlobal = () => {
    const [serverState, setServerState] = useState(null);
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [token, setToken] = useState(null);

    useEffect(() => {
        fetch('/api')
            .then((r) => r.json())
            .then((state) => setServerState(state.status));

        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthorized(true);
            setToken(token);
        }
    }, []);

    return (
        <section>
            <div>Status serwera: {serverState}</div>
            {isAuthorized ? <AdminSetup token={token} /> : <Login />}
        </section>
    );
};

export default AdminGlobal;