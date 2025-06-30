export function formatarDataParaMesAno(dataStr: string) {
  const [ano, mes] = dataStr.split("-");
  const data = new Date(`${ano}-${mes}-01`);
  return data
    .toLocaleDateString("pt-BR", {
      month: "short",
      year: "numeric",
    })
    .replace(" de ", "/");
}
