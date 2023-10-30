/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { colors } from '../../common/rootStyles';

const cardWrapperStyles = css({
  display: 'flex',
  padding: '24px',
  width: '357px',
  height: '314px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  cursor: 'pointer',
  gap: '24px',
  borderRadius: '16px',
  background: colors.white,
  boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
});

const cardHeaderWrapperStyles = css({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
});

const cardHeaderTextStyles = css({
  color: colors.plumbum,
  textAlign: 'center',
});

const cardInfoWrapperStyles = css({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
});

const cardInfoItemStyles = css({
  '& > p': {
    color: colors.asphalt,
    textAlign: 'center',
  },
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  gap: '14px',
});

const styles = {
  cardWrapperStyles,
  cardHeaderWrapperStyles,
  cardHeaderTextStyles,
  cardInfoWrapperStyles,
  cardInfoItemStyles,
};

export default styles;
