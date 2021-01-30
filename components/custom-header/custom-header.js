import React from "react"
import { Appbar } from 'react-native-paper';

export default function CustomHeader() {
  return (
    <Appbar.Header>
      <Appbar.Content title="My awesome app" />
    </Appbar.Header>
  );
}