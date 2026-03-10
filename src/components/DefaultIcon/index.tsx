import styles from "./styles.module.css";
import {
  CodeIcon,
  DatabaseIcon,
  FileCodeIcon,
  LineSquiggleIcon,
  PaletteIcon,
  PanelsTopLeftIcon,
} from "lucide-react";
import type { LanguagesType } from "../../data/languagesType";

type DefaultIconProps = {
  title: LanguagesType["title"];
};

export function DefaultIcon({ title }: DefaultIconProps) {
  const iconDictionary = {
    Python: <LineSquiggleIcon />,
    JavaScript: <CodeIcon />,
    Html: <FileCodeIcon />,
    Sql: <DatabaseIcon />,
    Css: <PaletteIcon />,
    React: <PanelsTopLeftIcon />,
  };

  return (
    <div className={`${styles[title]} ${styles.iconColor}`}>
      {iconDictionary[title]}
    </div>
  );
}
