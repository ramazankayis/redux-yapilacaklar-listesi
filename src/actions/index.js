import * as actionTypes from './actionTypes';

export const listeyeEkle = (text) => {
  return {
    type: actionTypes.EKLE,
    payload: text,
  };
};

export const isaretle = (id) => {
  return {
    type: actionTypes.ISARETLE,
    payload: id,
  };
};
export const temizle = () => {
  return {
    type: actionTypes.TEMİZLE,
  };
};
