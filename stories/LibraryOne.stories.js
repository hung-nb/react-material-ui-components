import React from 'react';
import LineHorizon from '../src/library-one/LineHorizon';
import Button from '../src/library-one/Button';
import Input from '../src/library-one/Input';
import DropDownMenu from '../src/library-one/DropDownMenu';

export default {
  title: 'Library One',
}

export const button = () => <Button />;

export const input = () => <Input />;

export const horizontalLine = () => <LineHorizon />;

export const dropdownMenu = () => <DropDownMenu />;