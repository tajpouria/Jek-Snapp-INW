import * as React from "react";
interface Props {
  children: string | number;
}

export const CardBadge: React.FC<Props> = ({ children }) => {
  return (
    <div className="badge badge--card">
      <p>{children}</p>
    </div>
  );
};
