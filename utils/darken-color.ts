export function darkenColor(hex: string, amount = 30): string {
  return (
    "#" +
    hex
      .replace(/^#/, "")
      .replace(/../g, (color) =>
        ("0" + Math.max(0, parseInt(color, 16) - amount).toString(16)).slice(-2)
      )
  );
}
