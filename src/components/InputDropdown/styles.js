import Styled from 'styled-components';

export const Container = Styled.div`
  display: block;
  position: relative;
  margin: 10px;
  font-size: 14px;
  letter-spacing: 0px;
  text-align: left;
  text-transform: none;
  color: rgba(3, 3, 3, 1);
  padding: 10px 10px 10px 10px;
  border-radius: 10px;
  border: 1px solid rgba(3, 3, 3, 1);
  background-color: rgba(255, 255, 255, 1);
`;

export const InputDropdown = Styled.select`
  moz-appearance: none;
  webkit-appearance: none;
  appearance: none;
  border: none;
  color: rgba(3, 3, 3, 1);
  background-color: rgba(255, 255, 255, 1);
`;

export const Option = Styled.option`
`;

export const Icon = Styled.i`
  position: absolute;
  top: 50%;
  right: 10px;
  width: 12px;
  height: 10px;
  font-size: 12px;
  transform: translateY(-50%);
  color: rgba(3, 3, 3, 1);
`;
