import React from 'react';
import { Input } from 'antd';

import { ITextFieldProps } from './type';

const TextFieldComponents: React.FC<ITextFieldProps> = ({ ...props }) => <Input {...props} />;

export default TextFieldComponents;
