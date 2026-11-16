type SectionPosition = { id: string; top: number };

export function getActiveSection(
  sections: SectionPosition[],
  activationLine: number,
  atBottom: boolean,
) {
  if (atBottom) return sections.at(-1)?.id;
  let active = sections[0]?.id;
  for (const section of sections) {
    if (section.top <= activationLine) active = section.id;
  }
  return active;
}
