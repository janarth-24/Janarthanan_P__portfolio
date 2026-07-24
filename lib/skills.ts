import {
  siJavascript,
  siHtml5,
  siCss,
  siPython,
  siCplusplus,
  siReact,
  siFlutter,
  siDart,
  siFirebase,
  siSupabase,
  siC,
  siSqlite,
  siMysql,
  siGit,
  siGithub,
} from "simple-icons";

export type SkillIcon = {
  title: string;
  slug: string;
  path: string;
  hex: string;
};

// 3×5 grid — consumed by the 3D keyboard (one icon per keycap) and, on mobile,
// by the flat list below for the static skills grid that replaces the
// hover-driven keyboard interaction. Taglines live in the i18n dictionary
// under `keyboard.taglines.<slug>`.
export const SKILLS_GRID: readonly (readonly SkillIcon[])[] = [
  [siJavascript, siHtml5, siCss, siPython, siCplusplus],
  [siReact, siFlutter, siDart, siFirebase, siSupabase],
  [siC, siSqlite, siMysql, siGit, siGithub],
] as const;

export const SKILLS_FLAT: readonly SkillIcon[] = SKILLS_GRID.flat();
