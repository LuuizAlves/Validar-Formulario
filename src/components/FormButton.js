import React from "react";
import { Button } from "react-native-elements";

const FormButton = ({ title, buttonType, buttonColor, ...rest }) => (
  <Button
    {...rest}
    type={buttonType}
    title={title}
    buttonStyle={{backgroundColor: buttonColor, width: 270, height: 60, borderRadius: 10, margin: 10}}
    titleStyle={{color: '#FFF', fontWeight: 'bold', fontSize: 22}}
  />
);

export default FormButton;