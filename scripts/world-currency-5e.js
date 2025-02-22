/**
 * Core functions for patching currencies configuration.
 */

const WORLD_CURRENCY_5E = "5e-world-currency";
const CONVERT = {
    CP: "cpConvert",
    SP: "spConvert",
    EP: "epConvert",
    GP: "gpConvert",
    PP: "ppConvert",
};
const ALT_REMOVE = {
    CP: "cpAltRemove",
    SP: "spAltRemove",
    EP: "epAltRemove",
    GP: "gpAltRemove",
    PP: "ppAltRemove",
};
const ALT = {
    CP: "cpAlt",
    SP: "spAlt",
    EP: "epAlt",
    GP: "gpAlt",
    PP: "ppAlt",
};
const ALT_ABRV = {
    CP: "cpAltAbrv",
    SP: "spAltAbrv",
    EP: "epAltAbrv",
    GP: "gpAltAbrv",
    PP: "ppAltAbrv",
};
const ALT_ICON = {
    CP: "cpAltIcon",
    SP: "spAltIcon",
    EP: "epAltIcon",
    GP: "gpAltIcon",
    PP: "ppAltIcon",
};

/** Gets the currencies specified by the user and returns them as an object.*/
function getCurrencySettings() {
    return {
        cpConvert: game.settings.get(WORLD_CURRENCY_5E, CONVERT.CP),
        spConvert: game.settings.get(WORLD_CURRENCY_5E, CONVERT.SP),
        epConvert: game.settings.get(WORLD_CURRENCY_5E, CONVERT.EP),
        gpConvert: game.settings.get(WORLD_CURRENCY_5E, CONVERT.GP),
        ppConvert: game.settings.get(WORLD_CURRENCY_5E, CONVERT.PP),
        cpAltRemove: game.settings.get(WORLD_CURRENCY_5E, ALT_REMOVE.CP),
        spAltRemove: game.settings.get(WORLD_CURRENCY_5E, ALT_REMOVE.SP),
        epAltRemove: game.settings.get(WORLD_CURRENCY_5E, ALT_REMOVE.EP),
        gpAltRemove: game.settings.get(WORLD_CURRENCY_5E, ALT_REMOVE.GP),
        ppAltRemove: game.settings.get(WORLD_CURRENCY_5E, ALT_REMOVE.PP),
        cpAlt: game.settings.get(WORLD_CURRENCY_5E, ALT.CP),
        spAlt: game.settings.get(WORLD_CURRENCY_5E, ALT.SP),
        epAlt: game.settings.get(WORLD_CURRENCY_5E, ALT.EP),
        gpAlt: game.settings.get(WORLD_CURRENCY_5E, ALT.GP),
        ppAlt: game.settings.get(WORLD_CURRENCY_5E, ALT.PP),
        cpAltAbrv: game.settings.get(WORLD_CURRENCY_5E, ALT_ABRV.CP),
        spAltAbrv: game.settings.get(WORLD_CURRENCY_5E, ALT_ABRV.SP),
        epAltAbrv: game.settings.get(WORLD_CURRENCY_5E, ALT_ABRV.EP),
        gpAltAbrv: game.settings.get(WORLD_CURRENCY_5E, ALT_ABRV.GP),
        ppAltAbrv: game.settings.get(WORLD_CURRENCY_5E, ALT_ABRV.PP),
        cpAltIcon: game.settings.get(WORLD_CURRENCY_5E, ALT_ICON.CP),
        spAltIcon: game.settings.get(WORLD_CURRENCY_5E, ALT_ICON.SP),
        epAltIcon: game.settings.get(WORLD_CURRENCY_5E, ALT_ICON.EP),
        gpAltIcon: game.settings.get(WORLD_CURRENCY_5E, ALT_ICON.GP),
        ppAltIcon: game.settings.get(WORLD_CURRENCY_5E, ALT_ICON.PP),
    };
}

/** Writes the user-provided currencies to the CONFIG.DND5E object. */
function patchCurrencies() {
    let currencySettings = getCurrencySettings();

    game.i18n.translations.DND5E.CurrencyPP = currencySettings[ALT.PP];
    game.i18n.translations.DND5E.CurrencyGP = currencySettings[ALT.GP];
    game.i18n.translations.DND5E.CurrencyEP = currencySettings[ALT.EP];
    game.i18n.translations.DND5E.CurrencySP = currencySettings[ALT.SP];
    game.i18n.translations.DND5E.CurrencyCP = currencySettings[ALT.CP];

    game.i18n.translations.DND5E.CurrencyAbbrPP = currencySettings[ALT_ABRV.PP];
    game.i18n.translations.DND5E.CurrencyAbbrGP = currencySettings[ALT_ABRV.GP];
    game.i18n.translations.DND5E.CurrencyAbbrEP = currencySettings[ALT_ABRV.EP];
    game.i18n.translations.DND5E.CurrencyAbbrSP = currencySettings[ALT_ABRV.SP];
    game.i18n.translations.DND5E.CurrencyAbbrCP = currencySettings[ALT_ABRV.CP];

    CONFIG.DND5E.currencies = {
        pp: {
            label: currencySettings[ALT.PP],
            abbreviation: currencySettings[ALT_ABRV.PP],
            conversion: currencySettings[CONVERT.PP],
        },
        gp: {
            label: currencySettings[ALT.GP],
            abbreviation: currencySettings[ALT_ABRV.GP],
            conversion: currencySettings[CONVERT.GP],
        },
        ep: {
            label: currencySettings[ALT.EP],
            abbreviation: currencySettings[ALT_ABRV.EP],
            conversion: currencySettings[CONVERT.EP],
        },
        sp: {
            label: currencySettings[ALT.SP],
            abbreviation: currencySettings[ALT_ABRV.SP],
            conversion: currencySettings[CONVERT.SP],
        },
        cp: {
            label: currencySettings[ALT.CP],
            abbreviation: currencySettings[ALT_ABRV.CP],
            conversion: currencySettings[CONVERT.CP],
        },
    };

    console.log(`${WORLD_CURRENCY_5E} | Patched Currencies`);
}

/** Removes the currency converter from the given character sheet. */
function removeConvertCurrency(html) {
    // dnd5e 4
    html
        .find(`[class="currency"]`)
        ?.find(`[class="item-action unbutton"]`)
        ?.remove();
}

/** Removes specified currency from character sheet */
function removeCurrency(html, currency) {
    // dnd5e 4
    html.find(`[class="currency"]`)?.find(`[aria-label="${currency}"]`)?.remove();
}

function removeCurrencies(html) {
    if (game.settings.get(WORLD_CURRENCY_5E, "RemoveConverter")) {
        removeConvertCurrency(html);
    }
    if (game.settings.get(WORLD_CURRENCY_5E, ALT_REMOVE.CP)) {
        removeCurrency(html, "Copper");
    }
    if (game.settings.get(WORLD_CURRENCY_5E, ALT_REMOVE.SP)) {
        removeCurrency(html, "Silver");
    }
    if (game.settings.get(WORLD_CURRENCY_5E, ALT_REMOVE.EP)) {
        removeCurrency(html, "Electrum");
    }
    if (game.settings.get(WORLD_CURRENCY_5E, ALT_REMOVE.GP)) {
        removeCurrency(html, "Gold");
    }
    if (game.settings.get(WORLD_CURRENCY_5E, ALT_REMOVE.PP)) {
        removeCurrency(html, "Platinum");
    }
}

/** Change currency icons in sheet */
function changeCurrencyIcon(html, currency, icon) {
    html.styl
    // dnd5e 4
    for (let h of html.find(`[class="currency ${currency}"]`)) {
        h.style.backgroundImage = `url('${icon}')`;
    }
}

function changeCurrencyIcons(html) {
    if (game.settings.get(WORLD_CURRENCY_5E, ALT_ICON.CP) != "") {
        changeCurrencyIcon(
            html,
            "cp",
            game.settings.get(WORLD_CURRENCY_5E, ALT_ICON.CP)
        );
    }
    if (game.settings.get(WORLD_CURRENCY_5E, ALT_ICON.SP) != "") {
        changeCurrencyIcon(
            html,
            "sp",
            game.settings.get(WORLD_CURRENCY_5E, ALT_ICON.SP)
        );
    }
    if (game.settings.get(WORLD_CURRENCY_5E, ALT_ICON.EP) != "") {
        changeCurrencyIcon(
            html,
            "ep",
            game.settings.get(WORLD_CURRENCY_5E, ALT_ICON.EP)
        );
    }
    if (game.settings.get(WORLD_CURRENCY_5E, ALT_ICON.GP) != "") {
        changeCurrencyIcon(
            html,
            "gp",
            game.settings.get(WORLD_CURRENCY_5E, ALT_ICON.GP)
        );
    }
    if (game.settings.get(WORLD_CURRENCY_5E, ALT_ICON.PP) != "") {
        changeCurrencyIcon(
            html,
            "pp",
            game.settings.get(WORLD_CURRENCY_5E, ALT_ICON.PP)
        );
    }
}

export {
    getCurrencySettings,
    patchCurrencies,
    removeConvertCurrency,
    removeCurrencies,
    changeCurrencyIcons,
    WORLD_CURRENCY_5E,
    ALT_REMOVE,
    ALT,
    CONVERT,
    ALT_ABRV,
};
