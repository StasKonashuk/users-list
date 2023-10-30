/** @jsxImportSource @emotion/react */
import React, { useState, useEffect, ChangeEvent } from 'react';
import { Card, Input, Modal } from '../../common';
import { GetUserResponse, getUsers } from '../../../api';

import styles from './styles';

function App() {
  const [users, setUsers] = useState<GetUserResponse[]>([]);
  const [search, setSearch] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<GetUserResponse>();

  useEffect(() => {
    getUsers({ term: search }).then((response) => {
      setUsers(response.data);
    });
  }, [search]);

  const openModal = (user: GetUserResponse) => {
    setModalOpen(true);
    setSelectedUser(user);
  };

  const userCard = users.map((user) => {
    return <Card onClick={() => openModal(user)} {...user} key={user.phone} />;
  });

  const onChangeSearchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div css={styles.wrapperStyles}>
      <div css={styles.contentWrapper}>
        <div css={styles.searchWrapper}>
          <Input onChange={onChangeSearchHandler} />
        </div>
        <div css={styles.usersListWrapper}>{userCard}</div>
      </div>
      {selectedUser && <Modal onClose={closeModal} isOpen={isModalOpen} userInfo={selectedUser} />}
    </div>
  );
}

export default App;
