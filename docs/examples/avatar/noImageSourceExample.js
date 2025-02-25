// @flow strict
import { type Node as ReactNode } from 'react';
import { Avatar, Flex } from 'gestalt';

export default function Example(): ReactNode {
  return (
    <Flex height="100%" width="100%" alignItems="center" justifyContent="center">
      <Avatar size="lg" name="Keerthi" />
    </Flex>
  );
}
