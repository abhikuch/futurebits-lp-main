/**
 * Exhaustive-check helper for discriminated unions.
 * New variants fail in tests and local builds until the switch is updated.
 *
 * @param {never} value
 * @returns {never}
 */
export function assertNever(value) {
  throw new Error(`Unhandled union member: ${String(value)}`);
}
