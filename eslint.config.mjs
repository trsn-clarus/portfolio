import nextConfig from "eslint-config-next";

const eslintConfig = [
  ...nextConfig,
  {
    ignores: ["legacy/**", "out/**", ".next/**"],
  },
];

export default eslintConfig;
