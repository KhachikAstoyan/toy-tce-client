import React from 'react';
import { Button, ButtonProps } from '@mantine/core';
import { GoogleIcon } from '../../../components/icons';
import { GithubIcon } from '@mantinex/dev-icons';

export function GoogleButton(
  props: ButtonProps & React.ComponentPropsWithoutRef<'button'>
) {
  return (
    <Button variant="default" {...props}>
      <GoogleIcon />
    </Button>
  );
}

export function GithubButton(
  props: ButtonProps & React.ComponentPropsWithoutRef<'button'>
) {
  return (
    <Button variant="default" {...props}>
      <GithubIcon style={{ width: '1rem', height: '1rem' }} />
    </Button>
  );
}
