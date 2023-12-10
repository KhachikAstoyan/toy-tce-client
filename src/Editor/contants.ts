export const languages = [
  'javascript',
  'rust',
  'typescript',
  'go',
  'c',
  'cpp',
  'python',
  'java',
  'bash',
] as const;

export type Language = (typeof languages)[number];
