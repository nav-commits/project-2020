import React from 'react';
import '../App.scss';

type Props = {
  clicked: React.MouseEventHandler<HTMLButtonElement>
};

const ToggleButton = ({clicked}: Props) => {

  return (
<button type="button" className="toggle-button" onClick={clicked}>
    <div className="toggle-button-line"/>
    <div className="toggle-button-line"/>
    <div className="toggle-button-line"/>
</button>
  );
}

export default ToggleButton;