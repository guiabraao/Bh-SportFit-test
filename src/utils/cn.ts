/**
 * Small utility to conditionally join class names, avoiding an extra
 * dependency like `clsx` for this project's scope.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ')
}
