/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { colors } from '../../common';

const wrapperStyles = css({
  display: 'inline-flex',
  padding: '64px 79px 64px 80px',
  justifyContent: 'center',
  alignItems: 'center',
  background: colors.white,
});

const contentWrapper = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '32px',
});

const searchWrapper = css({
  width: '1120px',
  height: '48px',
});

const usersListWrapper = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '24px 25px',
});

const styles = {
  wrapperStyles,
  contentWrapper,
  searchWrapper,
  usersListWrapper,
};

export default styles;
