const text = `
Reunimos as melhores práticas para criar o seu conteúdo eleomar com qualidade e rapidez, e tudo isso em um só lugar. Você ganha melhor visibilidade de seu site ou blog, geração automática de conteúdo rápido e de qualidade. Uma grande característica do sistema é a utilização de palavras-chave que seus clientes estão buscando pela internet a fim de deixar seu conteúdo com qualidade e relevância para seu público-alvo. A automação de nossa ferramenta pode preencher as lacunas no seu calendário editorial, auxiliando em produzir conteúdos originais e ganhando tempo para distribuir em outras tarefas. 
`;

const conjunto = `ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789 !@#$%&*()_/*-+.,`;
const lookahead = `
  ONLINE 192.168.1.1 ABCDEF active
  OFFLINE 192.168.1.2 ABCDEF inactive
  OFFLINE 192.168.1.3 ABCDEF inactive
  ONLINE 192.168.1.4 ABCDEF inactive
  OFFLINE 192.168.1.5 ABCDEF active
  OFFLINE 192.168.1.6 ABCDEF active
  ONLINE 192.168.1.7 ABCDEF active
  OFFLINE 192.168.1.8 ABCDEF inactive
`;

module.exports = {
  text,
  conjunto,
  lookahead,
};
