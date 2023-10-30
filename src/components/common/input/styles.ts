/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { colors } from '../../common/rootStyles';

const inputWrapperStyles = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  borderRadius: '24px',
  border: `1px solid ${colors.blueberry}`,
  minHeight: '48px',
  padding: '12px 24px',
  fontFamily: 'proxima-nova, sans-serif',
});

const inputStyles = css({
  width: '100%',
  height: '100%',
  border: 'none',
  outline: 'none',
});

const styles = {
  inputWrapperStyles,
  inputStyles,
};

export default styles;
