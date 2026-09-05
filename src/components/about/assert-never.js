/**
 * Exhaustive-check helper for About unions.
 * Newly added variants fail until the switch is updated.
 *
 * @param {never} value
 * @returns {never}
 */
export function assertNever(value) {
  throw new Error(`Unhandled union member: ${String(value)}`);
}
