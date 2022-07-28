import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
const Company = () => {
  const [InfraFuel, setInfraFuel] = useState(10);
  const [VehicleFuel, setVehicleFuel] = useState(20);
  const [Electricity, setElectricity] = useState(30);
  const infraFuelCo2Kg = InfraFuel * 0.652;
  const VehicleCo2Kg = VehicleFuel * 0.652;
  const ElectricityCo2Kg = Electricity * 0.49;
  const totalCo2Kg = InfraFuel + VehicleCo2Kg + ElectricityCo2Kg;
  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="InfraFuel"
          label="Infrastructure Fuel L"
          variant="outlined"
          defaultValue={InfraFuel}
          onChange={(e) => setInfraFuel(e.target.value)}
        />
        <TextField
          id="VehicleFuel"
          label="Vehicle Fuel L"
          variant="outlined"
          defaultValue={VehicleFuel}
          onChange={(e) => setVehicleFuel(e.target.value)}
        />
        <TextField
          id="Electricity"
          label="Electricity KW/Hour"
          variant="outlined"
          defaultValue={Electricity}
          onChange={(e) => setElectricity(e.target.value)}
        />
        <h3>Infra Fuel Co2 Generated: {infraFuelCo2Kg} Kg</h3>
        <h3>Vehicle Fuel Co2 Generated: {VehicleCo2Kg} Kg</h3>
        <h3>Electricity CO2 Generated: {ElectricityCo2Kg} Kg</h3>
        <h1>total:{totalCo2Kg}</h1>
      </Box>
    </>
  );
};
export default Company;
