document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".tab_button").forEach(button => {
        button.addEventListener("click", () => {
            const sideBar = button.parentElement;
            const tabsContainer = sideBar.parentElement;
            const tabNumber = button.dataset.forTab;
            const tabToActive = tabsContainer.querySelector(`.tab_content[data-tab="${tabNumber}"]`);

            sideBar.querySelectorAll(".tab_button").forEach(btn => btn.classList.remove("tab_button--active"));
            tabsContainer.querySelectorAll(".tab_content").forEach(tab => tab.classList.remove("tab_content--active"));

            button.classList.add("tab_button--active");
            tabToActive.classList.add("tab_content--active");
        });
    });

    const lengthFactors = {m:1, km:1000, cm:0.01, hm:100, mm:0.001, ft:0.3048};
    const timeFactors = {s:1, min:60, h:3600, d:86400, week:604800, month:2629800, year:31557600};
    const volumeFactors = {L:1, mL:0.001, cL:0.01, dL:0.1, m3:1000, cm3:0.001, mm3:0.000001};
    const areaFactors = {m2:1, km2:1e6, hm2:10000, dam2:100, dm2:0.01, cm2:0.0001, mm2:0.000001};

    function convertLength(value, from, to){ return value*lengthFactors[from]/lengthFactors[to]; }
    function convertTime(value, from, to){ return value*timeFactors[from]/timeFactors[to]; }
    function convertVolume(value, from, to){ return value*volumeFactors[from]/volumeFactors[to]; }
    function convertArea(value, from, to){ return value*areaFactors[from]/areaFactors[to]; }
    function convertTemperature(value, from, to){
        let c;
        if(from==="C") c=value;
        else if(from==="K") c=value-273.15;
        else if(from==="F") c=(value-32)*5/9;
        else if(from==="R") c=value*5/4;

        if(to==="C") return c;
        else if(to==="K") return c+273.15;
        else if(to==="F") return (c*9/5)+32;
        else if(to==="R") return c*4/5;
    }

    document.querySelector(".length_convert_btn").addEventListener("click", ()=>{
        const input = parseFloat(document.querySelector(".length_input").value);
        const from = document.querySelector(".length_input_unit").value;
        const to = document.querySelector(".length_output_unit").value;
        if(isNaN(input)) return alert("Masukkan angka valid!");
        document.querySelector(".length_output").innerText = convertLength(input, from, to);
    });

    document.querySelector(".temp_convert_btn").addEventListener("click", ()=>{
        const input = parseFloat(document.querySelector(".temp_input").value);
        const from = document.querySelector(".temp_input_unit").value;
        const to = document.querySelector(".temp_output_unit").value;
        if(isNaN(input)) return alert("Masukkan angka valid!");
        document.querySelector(".temp_output").innerText = convertTemperature(input, from, to);
    });

    document.querySelector(".time_convert_btn").addEventListener("click", ()=>{
        const input = parseFloat(document.querySelector(".time_input").value);
        const from = document.querySelector(".time_input_unit").value;
        const to = document.querySelector(".time_output_unit").value;
        if(isNaN(input)) return alert("Masukkan angka valid!");
        document.querySelector(".time_output").innerText = convertTime(input, from, to);
    });

    document.querySelector(".volume_convert_btn").addEventListener("click", ()=>{
        const input = parseFloat(document.querySelector(".volume_input").value);
        const from = document.querySelector(".volume_input_unit").value;
        const to = document.querySelector(".volume_output_unit").value;
        if(isNaN(input)) return alert("Masukkan angka valid!");
        document.querySelector(".volume_output").innerText = convertVolume(input, from, to);
    });

    document.querySelector(".area_convert_btn").addEventListener("click", ()=>{
        const input = parseFloat(document.querySelector(".area_input").value);
        const from = document.querySelector(".area_input_unit").value;
        const to = document.querySelector(".area_output_unit").value;
        if(isNaN(input)) return alert("Masukkan angka valid!");
        document.querySelector(".area_output").innerText = convertArea(input, from, to);
    });
});
