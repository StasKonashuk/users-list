/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { colors } from '../rootStyles';

const modalStyles = (isOpen: boolean) => {
  return css({
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(188, 195, 208, 0.50)',
    display: isOpen ? 'block' : 'none',
    zIndex: '1000',
    transition: 'opacity 0.3s ease-in-out',
    opacity: `${isOpen ? 1 : 0}`,
  });
};

const modalContentStyles = (isOpen: boolean) => {
  return css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '40px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '500px',
    minHeight: '468px',
    background: colors.white,
    padding: '24px',
    borderRadius: '16px',
    boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
    transform: `translate(-50%, ${isOpen ? '-50%' : '-100%'})`,
    transition: `transform 0.3s ease-in-out, opacity 0.3s ease-in-out`,
    opacity: `${isOpen ? 1 : 0}`,
  });
};

const modalHeaderStyles = css({
  display: 'flex',
  color: colors.plumbum,
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '40px',
});

const userInfoWrapperStyles = css({
  display: 'flex',
  width: '100%',
  alignItems: 'flex-start',
  gap: '40px',
});

const userInfoItemsWrapperStyles = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '14px',
});

const additionalUserInfoWrapperStyles = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '12px',
  alignSelf: 'stretch',
});

const additionalUserInfoHeaderStyles = css({
  color: colors.plumbum,
  fontSize: '18px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '24px',
});

const closeModalBtnStyles = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'none',
  border: 'none',
  minWidth: '20px',
  minHeight: '20px',
  height: '100%',
  width: '20px',
  padding: '0px',
  cursor: 'pointer',
});

const userInfoItemWrapperStyles = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  gap: '40px',
});

const userInfoLabelStyles = css({
  minWidth: '137px',
  color: colors.plumbum,
  fontSize: '18px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '24px',
});

const userInfoValueStyles = css({
  color: colors.asphalt,
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '24px',
});

const additionalUserInfoTextStyles = css({
  color: colors.asphalt,
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '18px',
  alignSelf: 'stretch',
});

const styles = {
  modalStyles,
  modalContentStyles,
  modalHeaderStyles,
  userInfoWrapperStyles,
  userInfoItemsWrapperStyles,
  additionalUserInfoWrapperStyles,
  additionalUserInfoHeaderStyles,
  closeModalBtnStyles,
  userInfoItemWrapperStyles,
  userInfoLabelStyles,
  userInfoValueStyles,
  additionalUserInfoTextStyles,
};

export default styles;
