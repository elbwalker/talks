# Tracking-Implementierung on scale

[Analytics Pioneers Community Training](https://analytics-pioneers.de/community-trainings/) · [Slides collection](https://gitlab.com/mstade81/analytics-pioneers)

- Definition eines Measurement Plans (wie ich ihn nutze & warum er so wichtig ist)
- Aufbau & direkte Umsetzung eines Implementation-Layers (deskriptiv im HTML als Grundlage für nachhaltige Setups)
- Gemeinsame Philosophie-Session über die Möglichkeiten bzgl. Testing und Monitoring der Setups

## Hallo

[walker.js](https://github.com/elbwalker/walker.js) · [elbwalker.com](https://www.elbwalker.com) · [Alexander](https://www.linkedin.com/in/alexanderkirtzel/)

(221007 Analytics Pioneers.pdf)[./221007 Analytics Pioneers.pdf]

## Measurement Plan

1. Measurement Plan
2. Mapping
3. Implementation

Theorie: Website und Mesasurement Plan sind im sync
Praxis: Niemand pflegt den Measurement Plan aktiv
Zukunft: Measurement als aktiver Baustein des Prozesses und single source of truth

### Bewusstes Bottleneck

Lösung: Measurement Plan als Config-Datei (as code)
Vorteile

- Gemeinsames Verständnis mit der IT
- Höhere Datenqualität durch Validierung
- Nebeneffekt: unterstützt Dokumentation für
- DSGVO-Konformität

## Implementierung

[Atomic Design Methodology](https://atomicdesign.bradfrost.com/chapter-2/)

Atoms (Actions, add)
Molecules (Properties, title)
Organisms (Entities, product)
Templates (Context, recommendation)
Pages (Globals, magazin)

Live coding im [React example](https://github.com/elbwalker/walker.js/tree/main/examples/react)
