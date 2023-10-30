/** @jsxImportSource @emotion/react */
import React, { InputHTMLAttributes } from 'react';
import { SearchIcon } from '../icons';
import { colors } from '../rootStyles';

import styles from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: InputProps) {
  return (
    <div css={styles.inputWrapperStyles}>
      <input {...props} css={styles.inputStyles} />
      <SearchIcon width="24px" height="24px" fill={colors.purpleFog} />
    </div>
  );
}
