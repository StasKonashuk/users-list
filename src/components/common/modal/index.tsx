/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from '@emotion/styled';
import { GetUserResponse } from '../../../api';
import { CloseIcon } from '../icons';

import styles from './styles';

interface ModalProps {
  userInfo: GetUserResponse;
  isOpen: boolean;
  onClose: () => void;
}

const ModalWrapper = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(188, 195, 208, 0.5);
  z-index: 1000;
`;

export function Modal(props: ModalProps) {
  const { onClose, isOpen, userInfo } = props;

  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
        document.body.style.overflow = 'auto';
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const modalAnimation = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: `translate(0%, ${isOpen ? '0%' : '-100%'})`,
    config: { tension: 100, friction: 20 },
  });

  return (
    <ModalWrapper style={modalAnimation}>
      <div css={styles.modalContentStyles(isOpen)} ref={modalRef}>
        <div css={styles.modalHeaderStyles}>
          <div>
            <h2>{userInfo.name}</h2>
          </div>
          <div>
            <button type="button" onClick={onClose} css={styles.closeModalBtnStyles}>
              <CloseIcon fill="#000" width="20px" height="20px" />
            </button>
          </div>
        </div>
        <div css={styles.userInfoWrapperStyles}>
          <div css={styles.userInfoItemsWrapperStyles}>
            <div css={styles.userInfoItemWrapperStyles}>
              <p css={styles.userInfoLabelStyles}>Телефон:</p>
              <p css={styles.userInfoValueStyles}>{userInfo.phone}</p>
            </div>
            <div css={styles.userInfoItemWrapperStyles}>
              <p css={styles.userInfoLabelStyles}>Почта:</p>
              <p css={styles.userInfoValueStyles}>{userInfo.email}</p>
            </div>
            <div css={styles.userInfoItemWrapperStyles}>
              <p css={styles.userInfoLabelStyles}>Дата приема:</p>
              <p css={styles.userInfoValueStyles}>{userInfo.hire_date}</p>
            </div>
            <div css={styles.userInfoItemWrapperStyles}>
              <p css={styles.userInfoLabelStyles}>Должность:</p>
              <p css={styles.userInfoValueStyles}>{userInfo.position_name}</p>
            </div>
            <div css={styles.userInfoItemWrapperStyles}>
              <p css={styles.userInfoLabelStyles}>Подразделение:</p>
              <p css={styles.userInfoValueStyles}>{userInfo.department}</p>
            </div>
          </div>
        </div>
        <div css={styles.additionalUserInfoWrapperStyles}>
          <div>
            <p css={styles.additionalUserInfoHeaderStyles}>Дополнительная информация:</p>
          </div>
          <div>
            <p css={styles.additionalUserInfoTextStyles}>
              Разработчики используют текст в качестве заполнителя макта страницы. Разработчики
              используют текст в качестве заполнителя макта страницы.
            </p>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
}
