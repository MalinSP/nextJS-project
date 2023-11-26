import React, { ReactNode } from "react";

const DrinksLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-xl">
      <div className="mockup-code mb-8">
        <pre data-prefix="$">
          <code>npx create-next-app@latest nextjs-tutorial</code>
        </pre>
      </div>
      {children}
    </div>
  );
};

export default DrinksLayout;
