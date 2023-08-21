const staticMember = "static";

export enum TemplateLiteral {
  Minecraft = `minecraft_${staticMember}`,
  Lol = `lol_${staticMember}`,
}

export enum RawDawg {
  Minecraft = "minecraft_static",
  Lol = "lol_static",
}

export function getTemplateLiteralKeys(): string[] {
  const keys: string[] = [];

  for (const key of Object.values(TemplateLiteral)) {
    keys.push(key);
  }
  return keys;
}

export function getRawDawgKeys(): string[] {
  const keys: string[] = [];

  for (const key of Object.values(RawDawg)) {
    keys.push(key);
  }
  return keys;
}
