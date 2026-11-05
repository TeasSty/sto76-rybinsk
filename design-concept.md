# Design concept — Вибростенд Сервис 76

## Client / project

- Name: Вибростенд Сервис 76 (Рыбинск)
- Date: 2026-11-05
- Niche: СТО с вибростендом; диагностика подвески до ремонта
- Source: https://vk.ru/ribinsk_sto
- Concept-ID: 2026-11-05-sto76-workshop-protocol-v1
- Composition-archetype: workshop-protocol
- Forbidden-for-this-niche: SaaS/funnel hero→3 cards→prices→form; quiet-luxury black/cream/gold; purple gradients; cream+#F4F1EA+terracotta; музейный B&W+одна красная линейка photo essay
- Delta-from-previous: n/a (новый проект)

## Niche fingerprint

- Ритуал: заезд → вибростенд → показ дефектов → смета → ремонт (часто в тот же день)
- Материалы: металлический корпус стенда, подъёмник, плитка бокса, белый кирпич, бумага наряда-заказа
- Свет: дневной из ворот + холодные лампы бокса
- Vernacular: стенд, наряд, смета, сход-развал, гарантия
- Сенсорика: гул стенда, запах масла, бетонный пол
- Объект бренда: вибростенд как прибор, который фиксирует причину до объёма работ

## Unique thesis

1. Mood: строгий сервисный протокол мастерской — как наряд на диагностику, не lifestyle-витрина.
2. Type rationale: Unbounded (display, индустриальный характер + кириллица); Golos Text (UI, таблицы, формы).
3. Palette logic (from materials/light): бумага наряда `#F3F1EC`, графит чернил `#1A1C1E`, холодный бетон `#9AA0A6`, сигнал стенда `#C45C26` (металл/гидравлика).
4. Composition: страница = протокол: шапка наряда → шаги процедуры → спецификация работ → тарифная сетка → гарантия → заявка (archetype workshop-protocol).
5. Motion: появление строк протокола по скроллу; лёгкий underline CTA; без параллакса и glow.
6. Main gesture: нумерованный diagnostic protocol как скелет всей страницы.

## Anti-clone checklist

- [x] Carryover: новый Concept-ID и archetype; не AVD void / Alumni / photo essay
- [x] Benchmark clone: Solux/Repasi — только планка качества (ритм, CTA), не палитра/сетка/identity
- [x] AI clusters: не purple-gradient; не cream+#F4F1EA+terracotta; не broadsheet; не generic dark SaaS
- [x] Brand test: без лого читается как СТО со стендом в Рыбинске (протокол, стенд, Чкалова 92)

## Palette + type

- Palette: `--paper #F3F1EC` (наряд), `--ink #1A1C1E` (чернила), `--concrete #9AA0A6` (бетон/подписи), `--stand #C45C26` (сигнал стенда), `--bay #E4E2DC` (поля документа)
- Type: Unbounded 600/700 (заголовки протокола) + Golos Text 400/500/600 (тело, таблица, форма)

## Primary benchmark

- URL: https://solux-auto.com
- Quality bar only: restraint, ясный CTA, техническая уверенность без визуального шума
