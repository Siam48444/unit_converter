export const frequency_conversion_factors = {
    hertz: {
        hertz: 1,
        kilohertz: 1 / 1_000,
        megahertz: 1 / 1_000_000,
        gigahertz: 1 / 1_000_000_000,
    },
    kilohertz: {
        hertz: 1_000,
        kilohertz: 1,
        megahertz: 1 / 1_000,
        gigahertz: 1 / 1_000_000,
    },
    megahertz: {
        hertz: 1_000_000,
        kilohertz: 1_000,
        megahertz: 1,
        gigahertz: 1 / 1_000,
    },
    gigahertz: {
        hertz: 1_000_000_000,
        kilohertz: 1_000_000,
        megahertz: 1_000,
        gigahertz: 1,
    }
};
