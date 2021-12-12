import { memo, ReactNode, VFC } from "react";

import { Header } from "../header/Header";

type Props = {
  children: ReactNode;
};

export const HeaderLayout: VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <div>
      <Header />
      {children}
    </div>
  );
});