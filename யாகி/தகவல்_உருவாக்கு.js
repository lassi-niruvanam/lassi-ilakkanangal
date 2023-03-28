import fs from "fs";

const getDirectories = (source) =>
  fs
    .readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

const மொழிகள் = getDirectories("மூலம்/இலக்கணங்கள்");

const வரிசைகள் = ["// தானாக உருவாக்கப்பட்டது - திருத்தம் செய்ய வேண்டாம்"];
for (const மொழி of மொழிகள்) {
  வரிசைகள்.push(
    `import ${மொழி}_தகவல்கள் from "@/இலக்கணங்கள்/${மொழி}/தகவல்கள்.json"`
  );
  வரிசைகள்.push(
    `import ${மொழி}_மொழிபெயர்ப்புகள் from "@/இலக்கணங்கள்/${மொழி}/மொழிபெயர்ப்புகள்.json"`
  );
}
வரிசைகள்.push(`\n\nexport const மொழி_தகவல்கள் = {
${மொழிகள்.map((மொழி) => "    " + மொழி + ": " + மொழி + "_தகவல்கள்,").join("\n")}
}`);
வரிசைகள்.push(`export const மொழி_மொழிபெயர்ப்புகள் = {
${மொழிகள்
      .map((மொழி) => "    " + மொழி + ": " + மொழி + "_மொழிபெயர்ப்புகள்,")
      .join("\n")}
}`);
const குறியீடு = வரிசைகள்.join("\n") + "\n";
fs.writeFileSync("மூலம்/நிரல்மொழிகள்.ts", குறியீடு);
