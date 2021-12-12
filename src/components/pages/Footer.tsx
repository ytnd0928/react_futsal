import { memo, VFC } from "react";

export const Footer: VFC = memo(() => {
  return (
    <div>
      <footer>
            <hr />
          <div className="footerwrapper">
            <p><small>&copy; 2021 team name  : Stewed figure of Sugata.inc.</small></p>
          </div>
        </footer>
    </div>
  );
});