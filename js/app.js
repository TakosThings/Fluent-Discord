$(function(){
    var buttons = $('.item');
    buttons.click(function(){
        var color_value = $(this).attr('data-color');
        var json = {
            "colors": {
                "YellowGold":       ["44, 100%", "50%"],
                "Gold":             ["33, 100%", "50%"],
                "OrangeBright":     ["22, 94%", "51%"],
                "OrangeDark":       ["21, 85%", "43%"],
                "Rust":             ["16, 99%", "43%"],
                "PaleRust":         ["9,  83%", "63%"],
                "BrickRed":         ["358, 63%", "51%"],
                "ModRed":           ["0, 100%", "63%"],
                "PaleRed":          ["355, 77%", "59%"],
                "Red":              ["355, 86%", "49%"],
                "RoseBright":       ["336, 100%", "46%"],
                "Rose":             ["335, 100%", "38%"],
                "PlumLight":        ["323, 100%", "45%"],
                "Plum":             ["323, 100%", "37%"],
                "OrchidLight":      ["307, 55%", "49%"],
                "Orchid":           ["307, 100%", "30%"],
                "DefaultBlue":      ["207, 100%", "42%"],
                "NavyBlue":         ["206, 100%", "35%"],
                "PurpleShadow":     ["242, 49%", "70%"],
                "PurpleShadowDark": ["241, 57%", "63%"],
                "IrisPastel":       ["265, 37%", "56%"],
                "IrisSpring":       ["265, 37%", "48%"],
                "VioletRedLight":   ["292, 50%", "52%"],
                "VioletRed":        ["293, 74%", "34%"],
                "CoolBlueBright":   ["191, 100%", "37%"],
                "CoolBlue":         ["196, 55%", "39%"],
                "Seafoam":          ["184, 100%", "38%"],
                "SeafoamTeal":      ["182, 96%", "27%"],
                "MintLight":        ["170, 100%", "35%"],
                "MintDark":         ["172, 99%", "26%"],
                "TurfGreen":        ["151, 100%", "40%"],
                "SportGreen":       ["143, 79%", "30%"],
                "Grey":             ["10, 3%", "47%"],
                "GreyBrown":        ["24, 3%", "35%"],
                "SteelBlue":        ["215, 14%", "47%"],
                "MetalBlue":        ["215, 14%", "37%"],
                "PaleMoss":         ["166, 18%", "41%"],
                "Moss":             ["165, 18%", "35%"],
                "MeadowGreen":      ["87, 93%", "26%"],
                "Green":            ["120, 77%", "27%"],
                "Overcast":         ["0, 0%", "46%"],
                "Storm":            ["30, 3%", "29%"],
                "BlueGrey":         ["194, 9%", "45%"],
                "GreyDark":         ["200, 9%", "32%"],
                "LiddyGreen":       ["120, 11%", "44%"],
                "Sage":             ["130, 7%", "35%"],
                "CamouflageDesert": ["46, 31%", "39%"],
                "Camouflage":       ["39, 14%", "43%"]
            }
        };

        $("#output").empty();
        $('#output').append('/* ' + color_value + ' */');
        $('#output').append('\n--fluent-accent-hue-sat: ' + json["colors"][color_value][0] + ";");
        $('#output').append('\n--fluent-accent-lightness: ' + json["colors"][color_value][1] + ";");
    });
});
