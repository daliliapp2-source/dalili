import { templatesList } from "@/app/(client)/themes/mocks/mockdata";

export const templatesMap = Object.fromEntries(
  templatesList.map(t => [t.id, t.component])
);
