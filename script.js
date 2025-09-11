 // ------------------------
    // Faktor konversi per kategori
    // ------------------------

    // Panjang ke meter
    const lengthFactors = {
      m: 1,
      km: 1000,
      cm: 0.01,
      hm: 100,
      mm: 0.001,
      ft: 0.3048
    };

    // Waktu ke detik
    const timeFactors = {
      s: 1,
      min: 60,
      h: 3600,
      d: 86400,
      week: 604800,
      month: 2629800, // approx 30.44 days
      year: 31557600 // approx 365.25 days
    };

    // Volume ke liter
    const volumeFactors = {
      L: 1,
      mL: 0.001,
      cL: 0.01,
      dL: 0.1,
      m3: 1000,
      cm3: 0.001,
      mm3: 0.000001
    };

    // Luas ke m²
    const areaFactors = {
      m2: 1,
      km2: 1e6,
      hm2: 10000,
      dam2: 100,
      dm2: 0.01,
      cm2: 0.0001,
      mm2: 0.000001
    };

    // ------------------------
    // Dropdown list per kategori
    // ------------------------
    const unitsList = {
      length: {
        m: "Meter (m)",
        km: "Kilometer (km)",
        cm: "Sentimeter (cm)",
        hm: "Hektameter (Hm)",
        mm: "Milimeter (mm)",
        ft: "Kaki (ft)"
      },
      temperature: {
        C: "Celcius (°C)",
        K: "Kelvin (K)",
        F: "Fahrenheit (°F)"
      },
      time: {
        s: "Detik (s)",
        min: "Menit (min)",
        h: "Jam (h)",
        d: "Hari (d)",
        week: "Minggu",
        month: "Bulan",
        year: "Tahun"
      },
      volume: {
        L: "Liter (L)",
        mL: "Mililiter (mL)",
        cL: "Centiliter (cL)",
        dL: "Desiliter (dL)",
        m3: "Kubik meter (m³)",
        cm3: "Kubik sentimeter (cm³ / cc)",
        mm3: "Kubik milimeter (mm³)"
      },
      area: {
        m2: "Meter persegi (m²)",
        km2: "Kilometer persegi (km²)",
        hm2: "Hektometer persegi (hm²)",
        dam2: "Dekameter persegi (dam²)",
        dm2: "Desimeter persegi (dm²)",
        cm2: "Centimeter persegi (cm²)",
        mm2: "Milimeter persegi (mm²)"
      }
    };

    // ------------------------
    // Update unit dropdown sesuai kategori
    // ------------------------
    function updateUnits() {
      const category = document.getElementById("category").value;
      const inputUnit = document.getElementById("inputUnit");
      const outputUnit = document.getElementById("outputUnit");

      inputUnit.innerHTML = "";
      outputUnit.innerHTML = "";

      for (const key in unitsList[category]) {
        const option1 = document.createElement("option");
        option1.value = key;
        option1.text = unitsList[category][key];
        inputUnit.add(option1);

        const option2 = document.createElement("option");
        option2.value = key;
        option2.text = unitsList[category][key];
        outputUnit.add(option2);
      }
    }

    // ------------------------
    // Konversi utama
    // ------------------------
    function convert() {
      const category = document.getElementById("category").value;
      const inputValue = parseFloat(document.getElementById("inputValue").value);
      const inputUnit = document.getElementById("inputUnit").value;
      const outputUnit = document.getElementById("outputUnit").value;

      if (isNaN(inputValue)) {
        document.getElementById("outputValue").value = "Masukkan angka!";
        return;
      }

      let result;

      switch (category) {
        case "length":
          result = convertLength(inputValue, inputUnit, outputUnit);
          break;
        case "temperature":
          result = convertTemperature(inputValue, inputUnit, outputUnit);
          break;
        case "time":
          result = convertTime(inputValue, inputUnit, outputUnit);
          break;
        case "volume":
          result = convertVolume(inputValue, inputUnit, outputUnit);
          break;
        case "area":
          result = convertArea(inputValue, inputUnit, outputUnit);
          break;
      }

      document.getElementById("outputValue").value = result;
    }

    // ------------------------
    // Function per kategori
    // ------------------------
    function convertLength(value, from, to) {
      const valueInMeter = value * lengthFactors[from];
      return valueInMeter / lengthFactors[to];
    }

    function convertTime(value, from, to) {
      const valueInSecond = value * timeFactors[from];
      return valueInSecond / timeFactors[to];
    }

    function convertVolume(value, from, to) {
      const valueInLiter = value * volumeFactors[from];
      return valueInLiter / volumeFactors[to];
    }

    function convertArea(value, from, to) {
      const valueInM2 = value * areaFactors[from];
      return valueInM2 / areaFactors[to];
    }

    function convertTemperature(value, from, to) {
      let celsius;

      // ke Celsius
      if (from === "C") celsius = value;
      else if (from === "K") celsius = value - 273.15;
      else if (from === "F") celsius = (value - 32) * 5/9;

      // dari Celsius ke target
      if (to === "C") return celsius;
      else if (to === "K") return celsius + 273.15;
      else if (to === "F") return (celsius * 9/5) + 32;
    }


    updateUnits();