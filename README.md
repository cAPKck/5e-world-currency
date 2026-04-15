<h1 align="center">World Currency FVTT module for D&D 5e</h1>

<p align="center">
<img src="https://gitlab.com/uploads/-/system/project/avatar/9199873/fvtt-solid-512.png?width=64" />
</p>
<p align="center">
<a href="https://github.com/cAPKck/5e-world-currency"><img src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" alt="Maintenance"></a>
<a href="https://github.com/cAPKck/5e-world-currency"><img src="https://img.shields.io/github/v/release/cAPKck/5e-world-currency.svg" alt="Version"></a>
<a href="https://foundryvtt.com/releases/"><img src="https://img.shields.io/endpoint?url=https://foundryshields.com/version?url=https://github.com/cAPKck/5e-world-currency/releases/latest/download/module.json"></a>
<a href="https://github.com/cAPKck/5e-world-currency/issues"><img alt="GitHub Issues" src="https://img.shields.io/github/issues/cAPKck/5e-world-currency"></a>
</p>

This [FoundryVTT](https://foundryvtt.com) module allows you to use your world's homebrew currencies in D&D 5th Edition. It is forked from cstby's [World Currency 5e](https://github.com/cstby/foundryvtt-world-currency-5e) module and updated to work with the newest versions of Foundry and the dnd5e module.

## Installation

1. On Foundry's "Add-on Modules" tab, click "Install Module"
2. At the bottom, paste `https://github.com/cAPKck/5e-world-currency/releases/latest/download/module.json` into the "Manifest URL" field and click "install".

## Features

### Rename Currency

Rename currencies and their abbreviations. The new names and abbreviations will be used wherever the old names appeared.

### Hide Currency

Hide currencies that you don't want to use. If your players get confused by platinum and electrum, hide them and never think of them again!

### Hide Converter

If your currencies aren't meant to be interchangeable, you can hide the currency converter from the character sheets.

### Set Conversion Rates

Set whatever currency rates you need. Great for using the silver standard, which makes gold more rare.

## Compatibility

World Currencies 5e works by patching the currency names and rates set by the D&D 5e System. Any module that pulls names and rates from the D&D 5e System will display them correctly.

| **Name** | FVTT v13 | FVTT v14 | Notes |
| --- | --- | --- | --- |
| [D&D 5e System](https://github.com/foundryvtt/dnd5e) | :heavy_check_mark: | :heavy_check_mark: |
| [Item Piles for D&D 5e](https://github.com/fantasycalendar/FoundryVTT-ItemPilesDND5e) | :heavy_check_mark: (D&D 5e system version <= 5.2.5) | Item Piles not available yet | Use button to sync settings |
| [Tidy 5e Sheets](https://github.com/kgar/foundry-vtt-tidy-5e-sheets) | :heavy_check_mark: | :heavy_check_mark: |

## Contributing

If you run into anything unexpected or have an idea for a new feature, please [submit an issue](https://github.com/cAPKck/5e-world-currency/issues). Merge requests are more than welcome.

## Acknowledgements

[cstby](https://github.com/cstby) for the Original World Currency 5e module

## License

This Foundry VTT module is licensed under [GNU GPLv3.0](https://www.gnu.org/licenses/gpl-3.0.en.html), supplemented by [Commons Clause](https://commonsclause.com/).

This work is licensed under Foundry Virtual Tabletop [EULA - Limited License Agreement for module development from March 2, 2023.](https://foundryvtt.com/article/license/)
