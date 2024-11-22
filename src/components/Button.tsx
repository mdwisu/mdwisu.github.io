/* eslint-disable @typescript-eslint/no-explicit-any */
const Button = ({ children, variation }: { children: any; variation: any }) => {
  const styles: any = {
    primary: "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700",
    secondary: "bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700",
  };

  return (
    <button className={`${styles[variation]} transition-all ease-in-out`}>
      {children}
    </button>
  );
};

export default Button;
