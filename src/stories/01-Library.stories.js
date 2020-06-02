import React from 'react';
import LineHorizon from '../components/01-Library/LineHorizon';
import Button from '../components/01-Library/Button';
import Input from '../components/01-Library/Input';
import DropDownMenu from '../components/01-Library/DropDownMenu';

export default {
  title: 'Library One',
}

export const button = () => <Button />;

export const input = () => <Input />;

export const horizontalLine = () => <LineHorizon />;

export const dropdownMenu = () => <DropDownMenu />;