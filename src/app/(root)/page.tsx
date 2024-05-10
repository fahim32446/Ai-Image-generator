import { UserButton } from '@clerk/nextjs';
import React from 'react';

type Props = {};

const HOME = (props: Props) => {
  return (
    <div>
      <p>HOME</p>

      <UserButton afterSignOutUrl='/' />
    </div>
  );
};

export default HOME;
