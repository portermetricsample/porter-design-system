# Pattern Audit — Porter report/dashboard templates

Inventario de patrones repetidos en `templates/` y los colores que aún NO
estaban tokenizados. Base para decidir Camino A (var-swap) y Camino B
(componentizar). Generado escaneando las plantillas, no de memoria.

---

## 1. Unidad base: la tarjeta `.blk`

Todas las secciones de reporte son una tarjeta `.blk` + eyebrow `.lbl` + título `.ttl`.
Definición idéntica en las 4 variantes salvo color (ahora cubierto por tokens de tema):

```
.blk  → background: var(--surface-card); border-radius: 20px; inset 1px var(--card-border)
.lbl  → font-bricolage, uppercase, .12em, color: var(--eyebrow-color)
.ttl  → font-bricolage, 21px, color: var(--text-title)
```

→ **Candidato #1 a componente** (`Card`/`Section` ya existe en el DS; alinear).

## 2. Patrones de visualización (en `report-blocks*`)

| Patrón | Marcado | Variación | ¿Componentizable? |
|---|---|---|---|
| Time series | SVG line + area fill + `.cdot`/`.tip` hover | low | ⚠️ medio (SVG a mano) |
| Pie / donut + leyenda | SVG `circle` dasharray | low | ⚠️ medio |
| Column / bar | `.bar` flex | low | ✅ |
| Horizontal breakdown | barras flex | low | ✅ |
| 100% stacked | barras inline | low | ✅ |
| Heat map (día×hora) | grid + escala morada | low | ✅ (con escala tokenizada) |
| Conditional formatting | grid + escala morada / pastel | media | ✅ |
| Pivot (simple + flexible) | tabla, rowspan, nested chips | media | ✅ |
| Funnel | barras decrecientes | low | ✅ |
| KPI + sparkline | número + mini-SVG | low | ✅ |
| Geographic tile-grid | grid de tiles + escala | media | ✅ |
| Waterfall | barras flotantes | low | ⚠️ medio |
| Scorecards | número + delta-pill | **alta** (Δ↑/↓, icono fuente, comparación) | ✅ **prioritario** |
| Downloads/export | botones | low | ✅ (usa `Button`) |

## 3. Patrones editoriales (`report-text-blocks*`)

Title/standfirst · body (1 y 2 col) · key takeaways · exec summary (TL;DR) ·
inline emphasis + metric chips · caption/source · pull quote · callouts
(Note / Win / Watch out / Risk) · dividers de color · **hero header**.

→ Hero header y callouts: **candidatos a componente**. El resto es prosa con utilidades de estilo.

## 4. Slides (`report-slides*`)

8 layouts 16:9: título · agenda · divisor de sección · KPIs · slide-con-gráfica ·
comparación · dato destacado · cierre. → patrón de **layout**, no de componente atómico.

## 5. Colores que faltaban tokenizar (ahora añadidos a `themes.css`)

| Uso | Antes (hardcode) | Token nuevo |
|---|---|---|
| Relleno de área bajo línea | `#ede9fe` / `rgba(138,95,192,.22)` | `--area-fill` (por tema) |
| Escala secuencial (heat / conditional / mapa) | `#f4f0fe`→`#3a0a80` | `--heat-1..6` (global) |
| Delta positivo | `#0d9488` (light) / `#2dd4bf` (dark) | `--delta-up` (por tema) |
| Delta negativo | `#ec4899` | `--delta-down` (global) |
| Fondo/texto de tooltip | `#fff` / `#1a0340` | `--tip-bg` / `--tip-text` (global) |

Con esto la cobertura de variables es ~100% para el contenido real de las plantillas.

## 6. Recomendación de priorización para componentes (Camino B)

1. **Scorecard** (mayor frecuencia + mayor variación → mayor ROI).
2. **DeltaPill** (lo usan scorecards, tablas, KPIs).
3. **HeroHeader**, **Callout**, **Section/Card** (estructura editorial).
4. Charts → **dejar para el final o no** (SVG a mano, alto costo, baja repetición exacta).
