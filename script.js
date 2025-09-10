const toMeter = {
    m: 1,
    km: 1000,
    cm: 0.01,
    hm: 100,
    mm: 0.001,
    ft: 0.3048
};

function convert() {
    const inputValue = parseFloat(document.getElementById("inputValue").value);
    const inputUnit = document.getElementById("inputUnit").value;
    const outputUnit = document.getElementById("outputUnit").value;

    if (isNaN(inputValue)) {
    document.getElementById("outputValue").value = "Masukkan angka!";
    return;
    }

    const valueInMeter = inputValue * toMeter[inputUnit];
    const result = valueInMeter / toMeter[outputUnit];
    document.getElementById("outputValue").value = result;
}