import styles from "./style.module.css";
import { forwardRef } from "react";

import type React from "react";

type DefaultInputProps = {
  id: string;
  labelText: string;
  icon: React.ReactNode;
} & React.ComponentProps<"input">;

const DefaultInput = forwardRef<HTMLInputElement, DefaultInputProps>(
  ({ id, type, labelText, icon, placeholder, ...rest }, ref) => {
    return (
      <>
        <label htmlFor={id}>
          {icon}
          <span>{labelText}</span>
        </label>
        <input
          ref={ref}
          className={styles.input}
          type={type}
          id={id}
          placeholder={placeholder}
          {...rest}
        />
      </>
    );
  },
);

export default DefaultInput;
