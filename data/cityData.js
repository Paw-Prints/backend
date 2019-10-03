// Add average inflation of top 15 cities to calculate costs based on CPI.
// National CPI is 251.11. Adjusting single dollar value based on major metropolitan areas' CPI
// Source: https://www.statista.com/statistics/245014/consumer-price-index-for-selected-us-cities/

const cityAdjustment = {
    SanDiego: 1.165,
    SanFrancisco: 1.137,
    Boston: 1.098,
    NewYork: 1.099,
    NewJersey: 1.099,
    Seattle: 1.08,
    LosAngeles: 1.059,
    Miami: 1.056,
    FtLauderdale: 1.056,
    Denver: 1.043,
    WashingtonDC: 1.041,
    Baltimore: 1.01,
    Philadelphia: 1.002,
    Minneapolis: 0.976,
    Atlanta: 0.95,
    Chicago: 0.947,
    Dallas: 0.927,
    Detroit: 0.925,
    StLouis: 0.911,
    Houston: 0.9,
    Tampa: 0.893,
    // State wide
    Alaska: 0.898,
    Hawaii: 1.103
};

// Could search within these arrays to find zip code match for city CPI

const SanDiego = [91911, 91914, 91915, 91932, 91942, 91945, 91950, 92014, 92025, 92027, 92029, 92037, 92064, 92065, 92067, 92071, 92075, 92101, 92102, 92103, 92104, 92105, 92106, 92107, 92108, 92109, 92110, 92111, 92113, 92114, 92115, 92116, 92117, 92118, 92119, 92120, 92121, 92122, 92123, 92124, 92126, 92127, 92128, 92129, 92130, 92131, 92132, 92134, 92135, 92139, 92140, 92145, 92147, 92154, 92173];

const SanFrancisco = [94102, 94103, 94104, 94105, 94107, 94108, 94109, 94110, 94111, 94112, 94114, 94115, 94116, 94117, 94118, 94121, 94122, 94123, 94124, 94127, 94129, 94130, 94131, 94132, 94133, 94134, 94158, 94089, 95002, 95008, 95013, 95014, 95032, 95035, 95037, 95050, 95054, 95070, 95110, 95111, 95112, 95113, 95116, 95117, 95118, 95119, 95120, 95121, 95122, 95123, 95124, 95125, 95126, 95127, 95128, 95129, 95130, 95131, 95132, 95133, 95134, 95135, 95136, 95138, 95139, 95140, 95148, 94577, 94601, 94602, 94603, 94605, 94606, 94607, 94608, 94609, 94610, 94611, 94612, 94613, 94618, 94619, 94621, 94704, 94705];

