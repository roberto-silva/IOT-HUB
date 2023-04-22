package com.soft.iot_hub_api.service;

import com.soft.iot_hub_api.domain.Machine;
import com.soft.iot_hub_api.domain.enums.Time;
import com.soft.iot_hub_api.dto.MachineDTO;
import com.soft.iot_hub_api.dto.ProductionDTO;
import com.soft.iot_hub_api.dto.SimplifiedMachineDTO;
import com.soft.iot_hub_api.dto.StoppingPointDTO;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.temporal.ChronoUnit;

@Service
@AllArgsConstructor
public class DBService {

    private MachineService machineService;

    public void init() {
        Machine machine = this.createMachine();
        ProductionDTO production = this.createProduction();
        StoppingPointDTO stoppingPoint = this.createStoppingPoint();
        machineService.addProduction(machine.getId(), production);
        machineService.addStoppingPoint(machine.getId(), stoppingPoint);
    }

    private ProductionDTO createProduction() {
        return ProductionDTO.builder()
                .product("Small bag")
                .time(Time.AFTERNOON)
                .goodPiece(1000)
                .badPiece(50)
                .build();
    }

    private StoppingPointDTO createStoppingPoint() {
        return StoppingPointDTO.builder()
                .reason("Machine under maintenance")
                .startPoint(Instant.now())
                .endPoint(Instant.now().plus(24, ChronoUnit.HOURS))
                .build();
    }

    private Machine createMachine() {
        SimplifiedMachineDTO machineDTO = SimplifiedMachineDTO.builder()
                .name("Bagger")
                .maximumProductionCapacity(1000)
                .piecesPerMinute(100)
                .workingTime(24)
                .build();

        return machineService.create(machineDTO);
    }

}
