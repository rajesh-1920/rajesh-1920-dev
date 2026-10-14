import { readFileSync } from "node:fs";

const check = (path, parse) => {
  const raw = readFileSync(path, "utf8");
  parse(raw);
  console.log(`ok: ${path}`);
};

check("vercel.json", JSON.parse);
check("manifest.webmanifest", JSON.parse);
check("package.json", JSON.parse);
check(".htmlhintrc", JSON.parse);
check(".stylelintrc.json", JSON.parse);
check(".prettierrc", JSON.parse);
