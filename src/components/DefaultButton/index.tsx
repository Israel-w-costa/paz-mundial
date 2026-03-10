import styles from "./style.module.css";

import type React from "react";

type DefaultButtonProps = {
  children: React.ReactNode;
} & React.ComponentProps<"button">;

export default function DefaultButton({
  color = "gray",
  children,
  ...props
}: DefaultButtonProps) {
  return (
    <>
      <button className={`${styles.button} ${styles[color]}`} {...props}>
        {children}
      </button>
    </>
  );
}
