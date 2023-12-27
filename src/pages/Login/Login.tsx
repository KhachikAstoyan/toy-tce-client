import React from 'react';
import {
  Button,
  Center,
  Divider,
  Flex,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { GithubButton, GoogleButton } from './components/SocialButtons';

export const Login = () => {
  return (
    <Center h="100vh">
      <Flex direction="column" gap={10} miw={250}>
        <Title order={2} align="center">
          Log in
        </Title>
        <TextInput placeholder="Username" />
        <TextInput placeholder="Password" type="password" />
        <Text>Or</Text>
        <Divider />

        <Flex w="100%" gap={5}>
          <GoogleButton disabled style={{ flex: 1 }} />
          <GithubButton disabled style={{ flex: 1 }} />
        </Flex>
        <Button type="submit">Log in</Button>
      </Flex>
    </Center>
  );
};
