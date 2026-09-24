# RJNieboer redesign

Geïsoleerde checkout: `rjnieboer-redesign`, branch `codex/high-end-redesign`.

## Preview

Run `node preview.cjs` en open http://127.0.0.1:4173. De preview ondersteunt de bestaande /about- en /projects-routes. Het contactformulier heeft lokaal geen backend; verzenden is niet getest en er zijn geen berichten verstuurd.

## Wijzigingen

- Home: typografische hero met bestaande Rotterdamfoto, decoratieve bewegende orbit, directe projectlinks, contrasterende portretsectie, projectcomposities en contactsectie.
- About en Projects: gedeelde kleurstelling, typografie, fotografie, navigatie en formulieren.
- `design.css` en `design.js`: gedeelde vormgeving, scrollreveal, voortgangsbalk en actieve navigatie; reduced-motion ondersteuning en zichtbare inhoud zonder JavaScript.
- Mobiele navigatie blijft zichtbaar. Bestaande inhoud, foto's, bestemmingen, CV en vertalingen behouden. Extra navigatielabels hergebruiken bestaande tekst.

## Validatie

- 104 bestaande vertaalde HTML-tekstvelden gelijk aan HEAD; `lang.js` ongewijzigd.
- Lokale link- en assetreferenties gecontroleerd; JavaScript syntax en git whitespace checks geslaagd.
- Home, About en Projects visueel in browser gecontroleerd op desktop en mobiel; Nederlandse taalwissel en taalbehoud bij navigatie gecontroleerd.
- Publieke sites bekeken: rjnieboer.com, justmyplan.com, justanopinion.org, justfigured.org, justabook.org. De twee apps tonen hun inlogscherm. LinkedIn-context alleen uit publiek geïndexeerde profielinformatie.

Op verzoek van Rinse omgezet naar Mondriaan-palet en gepubliceerd via origin/main: commit 04527b5. Alleen de vijf productiebestanden zijn gepusht. preview.cjs en dit document blijven lokaal. De LinkedIn-banner is nu ook visueel bekeken en gebruikt als merkreferentie.
