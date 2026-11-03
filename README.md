# Romulo Salobreña

Portfólio musical em português, em HTML, CSS e JavaScript. Não precisa instalar dependências ou executar um build.

## Abrir localmente

Na pasta deste projeto, execute `node server.mjs` e acesse http://127.0.0.1:4173. A variável `PORT` permite escolher outra porta. Os arquivos públicos do site estão na raiz do repositório.

## Conteúdo e identidade

- Início: apresentação, quatro projetos, seleção de vídeos e biografia curta.
- Salobard: pergaminho, vinho e tipografia de manuscrito; projeto solo autoral medieval.
- Area 31: preto, verde ácido e composição de zine; projeto solo autoral grunge.
- Igni Radix: tons terrosos e formas orgânicas; banda na Bulgária, com inspiração world.
- Covers & cia.: lilás e uma seleção de quatro vídeos reais do canal.
- Sobre: apresentação pessoal, acessível pelo rodapé.
- Em conjunto: seção “Também faço parte”, com Banda Taverna, Canção das Iluminuras, Rockin’ Strings, Concentus Musicus BH e Vidin Symphony Orchestra. Os links abrem os respectivos perfis no Instagram.

Instagrams dos projetos: `@salobard_` e `@banda_area31`, nas respectivas páginas. Instagram pessoal: `@meu_krush`, no contato e no rodapé. Os oito endereços foram fornecidos pelo usuário; os nomes dos cinco grupos foram conferidos nas páginas oficiais em 3 de novembro de 2026. As participações são apresentadas conforme informado pelo usuário, sem inventar funções ou datas.

Os textos e dados estão em `app.js`; a aparência está em `styles.css` e `socials.css`. As rotas usam fragmentos de URL e funcionam diretamente em qualquer hospedagem estática. A navegação suporta histórico do navegador, foco de teclado e menu móvel. Os botões de play abrem os vídeos diretamente no YouTube em uma nova aba.

As imagens vieram da pasta `fotos/`, com os originais preservados. Fotografias ao vivo: Rapha Garcia (conforme os nomes dos arquivos fornecidos). Ilustrações foram usadas como artes, sem representar fotografias de eventos ou da formação do Igni Radix. A foto nessa seção é de Rômulo; a formação da banda ainda não foi detalhada.

Nome público e quatro vídeos conferidos no YouTube em 3 de novembro de 2026. Os covers não foram atribuídos aos projetos autorais. Não há agenda, contato por formulário ou lançamentos inventados. O link principal é https://www.youtube.com/@Salobrenha.

Fontes locais: Bricolage Grotesque e DM Sans. Licenças OFL na pasta `assets/`.

## Hospedagem

O `index.html`, os arquivos CSS e JavaScript e a pasta `assets/` ficam na raiz do repositório. Não há etapa de build, serviços externos de backend ou variáveis de ambiente obrigatórias. Os caminhos relativos e as rotas por fragmento permitem servir o site em uma subpasta.

No GitHub, configure **Settings → Pages → Deploy from a branch → main → /(root)**. O arquivo `.nojekyll` permite publicar os arquivos estáticos diretamente, sem processamento pelo Jekyll.

Endereço do projeto no GitHub Pages: https://romsgs.github.io/romulosalobrena/.
