import { useState } from "react";
import styles from "./page.module.css";

const useRippling = () => {
  const [{ x, y, size }, setRippleData] = useState({ x: -1, y: -1, size: 0 });

  const isRippling = x !== -1 && y !== -1;

  const handleRippleOnClick = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    const size = Math.max(width, height);
    const x = e.clientX - left - size / 2;
    const y = e.clientY - top - size / 2;

    setRippleData({ x, y, size });

    setTimeout(() => {
      setRippleData({ x: -1, y: -1, size: 0 });
    }, 1000); // Adjust duration for animation
  };

  return {
    x,
    y,
    size,
    handleRippleOnClick,
    isRippling,
  };
};

const Button = (props) => {
  const { children, className, onClick, ...rest } = props;

  const { x, y, size, handleRippleOnClick, isRippling } = useRippling();

  const handleClick = (e) => {
    handleRippleOnClick(e);
    onClick && onClick(e);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${className} ${styles.btn}`}
      {...rest}
    >
      <span className={styles.content}>{children}</span>
      {isRippling && (
        <span
          className={`${styles["btn-ripple"]}`}
          style={{
            width: size,
            height: size,
            left: x,
            top: y,
          }}
        />
      )}
    </button>
  );
};

export default Button;
