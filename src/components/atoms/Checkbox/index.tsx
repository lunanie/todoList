import React from 'react';
import { Checkbox } from 'antd';

import { ICheckboxProps } from './type';

const CheckboxComponents: React.FC<ICheckboxProps> = ({ ...props }) => <Checkbox {...props} />;

export default CheckboxComponents;
