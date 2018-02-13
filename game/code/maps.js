function maps_setup() {
    dustAndGreen = new map_template();
    dust = new map_template();

    // DUST AND GREEN
    dustAndGreen.map = [
        [02, 02, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01],
        [02, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01],
        [02, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01],
        [01, 01, 01, 01, 01, 01, 02, 01, 01, 01, 01, 01, 01],
        [01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01],
        [01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01],
        [01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01],
        [01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01],
        [01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 02]
    ];

    dustAndGreen.map_overlay = [
        [05, 04, 12, 08, 08, 08, 08, 08, 08, 08, 08, 08, 13],
        [12, 12, 16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 06],
        [00, 07, 00, 00, 00, 14, 09, 15, 00, 00, 00, 00, 06],
        [12, 16, 00, 00, 00, 06, 04, 07, 00, 00, 00, 00, 06],
        [07, 00, 00, 00, 00, 17, 08, 16, 00, 00, 00, 00, 06],
        [07, 00, 14, 09, 15, 00, 00, 00, 00, 00, 00, 00, 06],
        [07, 00, 17, 08, 16, 00, 00, 00, 00, 14, 15, 00, 06],
        [07, 00, 00, 00, 00, 00, 00, 00, 00, 17, 16, 14, 10],
        [11, 09, 09, 09, 09, 09, 09, 09, 09, 09, 09, 10, 00]
    ];

    dustAndGreen.walls = [
        [01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01],
        [01, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 01],
        [01, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 01],
        [01, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 01],
        [01, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 01],
        [01, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 01],
        [01, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 01],
        [01, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 01],
        [01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01]
    ];
    
    // DUST AND GREEN
    dust.map = [
        [02, 02, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01],
        [02, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01],
        [02, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01],
        [01, 01, 01, 01, 01, 01, 02, 01, 01, 01, 01, 01, 01],
        [01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01],
        [01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01],
        [01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01],
        [01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01],
        [01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 02]
    ];

    dust.map_overlay = [
        [05, 04, 12, 08, 08, 08, 08, 08, 08, 08, 08, 08, 13],
        [12, 12, 16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 06],
        [00, 07, 00, 00, 00, 14, 09, 15, 00, 00, 00, 00, 06],
        [12, 16, 00, 00, 00, 06, 04, 07, 00, 00, 00, 00, 06],
        [07, 00, 00, 00, 00, 17, 08, 16, 00, 00, 00, 00, 06],
        [07, 00, 14, 09, 15, 00, 00, 00, 00, 00, 00, 00, 06],
        [07, 00, 17, 08, 16, 00, 00, 00, 00, 14, 15, 00, 06],
        [07, 00, 00, 00, 00, 00, 00, 00, 00, 17, 16, 14, 10],
        [11, 09, 09, 09, 09, 09, 09, 09, 09, 09, 09, 10, 00]
    ];

    dust.walls = [
        [01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01],
        [01, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 01],
        [01, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 01],
        [01, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 01],
        [01, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 01],
        [01, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 01],
        [01, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 01],
        [01, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 01],
        [01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01]
    ];
}