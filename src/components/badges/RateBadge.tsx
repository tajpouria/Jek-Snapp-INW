import * as React from "react";
interface Props {
  children: string | number;
  rate: number;
}

export const RateBadge: React.FC<Props> = ({ children, rate }) => {
  const calStatusColor = React.useCallback(() => {
    const target =
      typeof rate === "string" ? parseInt(rate as string, 10) : rate;
    if (target === 5) return "#3f7e00";
    else if (target >= 2 && target < 3) return "#ffb226";
    else if (target >= 3 && target < 4) return "#9acd32";
    else if (target >= 4 && target < 5) return "#5ba829";
    return "#89959b";
  }, [rate]);

  return (
    <div
      className="badge badge--rate"
      style={{ backgroundColor: calStatusColor() }}
    >
      <p>{children === "۰" || !children ? <span>جدید</span> : children}</p>
    </div>
  );
};
