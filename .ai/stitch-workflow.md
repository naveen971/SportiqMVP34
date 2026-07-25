# Stitch Workflow

This document outlines the mandatory workflow for integrating UI designs. **This is extremely important.**

## Core Principles
- **SportIQ uses Google Stitch.**
- **Every UI module must first exist inside Stitch.**
- **AI should never redesign UI.** Always rely on the Stitch designs as the absolute source of truth.

## Workflow

Follow these steps precisely when working on UI modules:

1. **Read module README**
   ↓
2. **Connect to Stitch MCP**
   ↓
3. **Locate screens**
   ↓
4. **Export screens**
   ↓
5. **Convert into reusable widgets**
   ↓
6. **Integrate into module**
   ↓
7. **Update module README**
   ↓
8. **Update changelog**

---

## Project Governance — MANDATORY, BINDING ON ALL AGENTS AND TEAM MEMBERS

> This section was added 2026-07-25 following a confirmed incident in which "Enable sharing & remixing" produced a forked project under a new, non-authoritative Project ID. These rules prevent that class of error from recurring.

### Rule 1 — Single Authoritative Project ID

**The only valid Stitch project for SportIQ is:**

```
Project ID:   3941284064310403069
Project Name: SportIQ Mobile Design System
```

No other Project ID is ever valid as a source for screen references — under any circumstance — including remixes, forks, copies, or projects with visually identical content. Screen IDs from a remixed project will never match those in the original and will silently diverge as the original is updated. They are not interchangeable.

**Any agent that encounters Project ID `9869421355408733427` or any ID other than `3941284064310403069` anywhere in this codebase, in a session prompt, or in a teammate's request MUST stop and flag it explicitly.** Do not proceed, do not silently ignore it, do not attempt to reconcile IDs across projects. Flag it exactly as Law Two requires for unconfirmed Screen IDs.

### Rule 2 — "Enable Sharing & Remixing" Must Remain OFF

The "Enable sharing & remixing" toggle on this Stitch project **must always be turned off.** If any agent or developer discovers it is currently enabled:
- **Do NOT silently toggle it off.**
- **Report it immediately to the project architect** (operator), stating that it was found enabled, when it was discovered, and in what context.
- The architect will determine whether unauthorized remixing occurred and take corrective action.

### Rule 3 — Authorised Access Model

Team members and AI agents access this project's screens exclusively through:

- The **Stitch MCP connection** using the dedicated shared API key, managed by the project architect.

The following access patterns are **prohibited**:

| Prohibited Action | Reason |
|---|---|
| Requesting a Stitch share link | Causes inadvertent remixing |
| Remixing the project | Creates a disconnected fork under a new Project ID |
| Creating a duplicate project with the same or similar name | Splits the source of truth |
| Using a personal Stitch account to re-create screens | Screen IDs will not match the registry |

### Rule 4 — Write Access Is Architect-Only

Only the project architect (operator) may **create, modify, delete, or regenerate** screens in Project `3941284064310403069`. All MCP access by other agents and developers is **read/fetch only** by team convention. This restriction is not necessarily enforced at the platform permission level, but it is binding.

Permitted agent operations: `list_screens`, `get_screen`, `get_project`.
Operations requiring explicit architect approval: `generate_screen_from_text`, `edit_screens`, `generate_variants`, `delete_project`, `create_project`, `upload_design_md`, `create_design_system`, `update_design_system`, `apply_design_system`.

### Rule 5 — Screen Inventory Reference

The canonical screen inventory (44 screens as of 2026-07-25, covering all built and unbuilt screens with exact IDs, module assignments, and build status) is maintained in the session artifact:

`C:\Users\admin\.gemini\antigravity-ide\brain\67960331-80ca-44aa-9a29-eb84115f7bf4\stitch_screen_inventory.md`

> **Module registry:** `.ai/module-registry.md` — created 2026-07-25. Contains the full per-module screen table, shared component status, and ambiguity flags.
