package com.soft.iot_hub_api.service;

import com.soft.iot_hub_api.domain.Production;
import com.soft.iot_hub_api.domain.StoppingPoint;
import com.soft.iot_hub_api.dto.ProductionDTO;
import com.soft.iot_hub_api.dto.StoppingPointDTO;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class DBService {

    private  MachineService machineService;

    public void init() {
        var production = this.createProduction(new ProductionDTO());
        var stoppingPoint = this.createStoppingPoint(new StoppingPointDTO());
        this.createMachine(production, stoppingPoint);
    }

    private StoppingPoint createStoppingPoint(StoppingPointDTO stoppingPointDTO) {
        return null;
    }

    private Production createProduction(ProductionDTO productionDTO) {
        return null;
    }

    private void createMachine(Production productionDTO, StoppingPoint stoppingPointDTO) {

    }

}
