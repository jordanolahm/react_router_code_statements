export const getNameColor = (name?: string): string => {
    if (!name) return "red";
    const firstLetter = name[0].toLowerCase();
    return firstLetter >= "a" && firstLetter <= "m" ? "green" : "orange";
  };