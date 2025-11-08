import React from 'react';
import { Table, Button, Badge, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ConfirmModal from './ConfirmModal';

const UserTable = ({ users, onBanUser, onViewDetails }) => {
    const navigate = useNavigate();
    const [showBanModal, setShowBanModal] = React.useState(false);
    const [selectedUser, setSelectedUser] = React.useState(null);

    const handleBanClick = (user) => {
        setSelectedUser(user);
        setShowBanModal(true);
    };

    const handleConfirmBan = () => {
        if (selectedUser) {
            onBanUser(selectedUser.id);
            setShowBanModal(false);
            setSelectedUser(null);
        }
    };

    const handleViewDetails = (userId) => {
        if (onViewDetails) {
            onViewDetails(userId);
        }
    };

    const getStatusBadge = (status) => {
        const variants = {
            active: 'success',
            blocked: 'danger',
            locked: 'warning'
        };
        return (
            <Badge bg={variants[status] || 'secondary'}>
                {status}
            </Badge>
        );
    };

    const getRoleBadge = (role) => {
        return (
            <Badge bg={role === 'admin' ? 'primary' : 'info'}>
                {role}
            </Badge>
        );
    };

    if (!users || users.length === 0) {
        return (
            <div className="text-center p-4">
                <p>No users found.</p>
            </div>
        );
    }

    return (
        <>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Avatar</th>
                        <th>Username</th>
                        <th>Full Name</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>
                                <Image 
                                    src={user.avatar || '/images/default-avatar.png'} 
                                    rounded 
                                    style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                                    onError={(e) => {
                                        e.target.src = '/images/default-avatar.png';
                                    }}
                                />
                            </td>
                            <td>{user.username}</td>
                            <td>{user.fullName}</td>
                            <td>{getRoleBadge(user.role)}</td>
                            <td>{getStatusBadge(user.status)}</td>
                            <td>
                                <div className="d-flex gap-2">
                                    <Button
                                        variant="info"
                                        size="sm"
                                        onClick={() => handleViewDetails(user.id)}
                                    >
                                        View Details
                                    </Button>
                                    <Button
                                        variant="danger"
                                        size="sm"
                                        onClick={() => handleBanClick(user)}
                                        disabled={user.status === 'blocked' || user.status === 'locked'}
                                    >
                                        Ban Account
                                    </Button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <ConfirmModal
                show={showBanModal}
                title="Ban Account"
                message={`Are you sure you want to ban account "${selectedUser?.username}"?`}
                onConfirm={handleConfirmBan}
                onHide={() => {
                    setShowBanModal(false);
                    setSelectedUser(null);
                }}
            />
        </>
    );
};

export default UserTable;

