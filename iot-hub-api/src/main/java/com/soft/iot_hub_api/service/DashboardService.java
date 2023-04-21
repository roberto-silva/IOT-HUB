package com.soft.iot_hub_api.service;

import com.soft.iot_hub_api.domain.Machine;
import com.soft.iot_hub_api.dto.DashboardDTO;
import com.soft.iot_hub_api.dto.ProductionDTO;
import com.soft.iot_hub_api.dto.StoppingPointDTO;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Set;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class DashboardService {

    private final  MachineService machineService;

    public DashboardDTO generateDashboard(Long machineId){
        Machine machine = machineService.getById(machineId);
        var stoppingPoints = machine.getStoppingPoints().stream().map(StoppingPointDTO::new).collect(Collectors.toSet());
        var productionPoints = machine.getProductions().stream().map(ProductionDTO::new).collect(Collectors.toSet());
        generateOverallEquipmentEffectivenes(machine, stoppingPoints,productionPoints);
        return null;
    }

    public void generateOverallEquipmentEffectivenes(Machine machine, Set<StoppingPointDTO> stoppingPoints, Set<ProductionDTO> productionPoints){

    }

}
