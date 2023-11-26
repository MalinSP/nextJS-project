"use client";

interface ICustomErrorProps {
  error: {
    message: string;
  };
}

const error = (error: ICustomErrorProps) => {
  console.log(error);
  return <div>{error.error.message}</div>;
};

export default error;
