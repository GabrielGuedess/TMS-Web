import { type ReactNode } from 'react';

import { Base } from 'templates/Base';
import { EntryAnimation } from 'animations/Entry';

const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <EntryAnimation />

    <Base>{children}</Base>
  </>
);

export default Layout;
