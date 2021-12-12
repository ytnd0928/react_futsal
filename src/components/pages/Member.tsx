import { memo, VFC } from "react";

export const Member: VFC = memo(() => {
  return (
    <div>
      <p>Member</p>
      <p>こんにちは</p>
    </div>
  );
});