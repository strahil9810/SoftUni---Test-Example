function hospital(inputPeriod) {
    var period = parseInt(inputPeriod[0]);
    var treatedPatients = 0;
    var untreatedPatients = 0;
    var countDoctors = 7;

    for (var day = 1; day <= period; day++) {
        var currentPatients = Number(inputPeriod[day]);
        if ((day % 3 == 0) && (untreatedPatients > treatedPatients)) {
            countDoctors++;
        }

        if (currentPatients > countDoctors) {
            treatedPatients += countDoctors;
            untreatedPatients += currentPatients - countDoctors;
        }
        else {
            treatedPatients += currentPatients;
        }
    }
    console.log(`Treated patients: ${treatedPatients}.`);
    console.log(`Untreated patients: ${untreatedPatients}.`);
}
hospital([4,
7,
27,
9,
1])