    function mod2(val) {
        if (val == 0) {
            return true;
        } else if (val < 0)
        {
            return false;
        } else
        {
            return mod2((val -2));
        }
        
    }

    function mod(val1, val2) {
        if (val1 == 0) {
            return true;
        } else if (val1 < 0)
        {
            return false;
        } else
        {
            return mod((val1 - val2), val2);
        }
    }

    function main() {
        var a = parseFloat(prompt("Valor A:"));
        var b = parseFloat(prompt("Valor B:"));

        if (mod(a,b)) {
            console.log ("sim");
        } else
        {
            console.log ("não");
        }
    }

    main();


    // fazer utilizano subtração com recurção 