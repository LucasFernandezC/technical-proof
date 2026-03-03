import classNames from "classnames";
import React, { ButtonHTMLAttributes, FunctionComponent } from "react";

type ButtonModifier = "solid" | "border";

type Props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  modifier?: ButtonModifier;
  disabled?: boolean;
};

const getModifierStyles = (modifier: ButtonModifier) => {
  const modifierStyles: { [key: string]: string } = {
    solid: "bg-[#324BFF] text-white",
    border: "bg-white border border-[#324BFF] text-[#324BFF]",
  };
  return modifierStyles[modifier];
};

const Button: FunctionComponent<
  Props & ButtonHTMLAttributes<HTMLButtonElement>
> = ({
  children,
  className,
  disabled,
  onClick,
  modifier = "solid",

  ...restOfProps
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type="button"
      className={classNames(
        "rounded-[50px] text-[16px]  px-[30px] uppercase hover:cursor-pointer font-medium h-[49px] focus:outline-none focus:ring-2 focus:ring-[#324BFF]",
        getModifierStyles(modifier),
        disabled && "opacity-50 cursor-not-allowed pointer-events-none",
        className,
      )}
      {...restOfProps}
    >
      {children}
    </button>
  );
};

export { Button };
