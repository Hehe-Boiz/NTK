// src/custom.d.ts

declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.jpeg' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const value: any; // Hoặc React.FC<React.SVGProps<SVGSVGElement>> nếu bạn dùng SVGR
  export default value;
}

declare module '*.gif' {
  const value: string;
  export default value;
}