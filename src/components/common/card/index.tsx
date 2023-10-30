/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/** @jsxImportSource @emotion/react */
import React from 'react';
import { MessageIcon, PhoneIcon } from '../icons';
import { colors } from '../rootStyles';
import { GetUserResponse } from '../../../api';

import styles from './styles';

interface CardProps extends GetUserResponse {
  onClick: () => void;
}

export function Card(props: CardProps) {
  const { name, phone, email, onClick } = props;

  return (
    <div onClick={onClick} css={styles.cardWrapperStyles}>
      <div css={styles.cardHeaderWrapperStyles}>
        <h2 css={styles.cardHeaderTextStyles}>{name}</h2>
      </div>
      <div css={styles.cardInfoWrapperStyles}>
        <div css={styles.cardInfoItemStyles}>
          <PhoneIcon fill={colors.purpleFog} width="24px" height="24px" />
          <p>{phone}</p>
        </div>
        <div css={styles.cardInfoItemStyles}>
          <MessageIcon fill={colors.purpleFog} width="24px" height="24px" />
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
}
