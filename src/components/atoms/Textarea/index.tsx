import React from 'react';
import { Input } from 'antd';

import { ITextareaProps } from './type';

const { TextArea } = Input;

const TextareaComponents: React.FC<ITextareaProps> = ({ ...props }) => <TextArea {...props} />;

export default TextareaComponents;
