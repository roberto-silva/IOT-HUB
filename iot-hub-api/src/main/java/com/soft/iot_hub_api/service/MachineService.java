package com.soft.iot_hub_api.service;

import com.soft.iot_hub_api.domain.Machine;
import com.soft.iot_hub_api.domain.Production;
import com.soft.iot_hub_api.domain.StoppingPoint;
import com.soft.iot_hub_api.dto.MachineDTO;
import com.soft.iot_hub_api.dto.ProductionDTO;
import com.soft.iot_hub_api.dto.StoppingPointDTO;
import com.soft.iot_hub_api.repository.MachineRepository;
import lombok.AllArgsConstructor;
import org.hibernate.ObjectNotFoundException;
import org.springframework.beans.BeanUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class MachineService {

    private final MachineRepository machineRepository;
    private final StoppingPointService stoppingPointService;
    private final ProductionService productionService;

    public Page<Machine> getAll(Pageable pageable, String search) {
        return machineRepository.findAllByNameContainsIgnoreCase(search, pageable);
    }

    public Machine getById(Long machineId) {
        return machineRepository.findById(machineId).orElseThrow(() -> new ObjectNotFoundException(machineId, "Machine"));
    }

    public Machine create(MachineDTO machineDTO) {
        Machine machine = new Machine();
        BeanUtils.copyProperties(machineDTO, machine);
        return machineRepository.save(machine);
    }

    public Machine update(Long id, MachineDTO machineDTO) throws ObjectNotFoundException {
        Machine machine = getById(id);
        BeanUtils.copyProperties(machineDTO, machine);
        return machineRepository.save(machine);
    }

    public void delete(Long id) throws ObjectNotFoundException {
        Machine machine = getById(id);
        machineRepository.delete(machine);
    }

    public Machine addProduction(Long machineId, ProductionDTO productionDTO) {
        Machine machine = getById(machineId);
        Production production = productionService.create(productionDTO);
        machine.addProduction(production);
        return machineRepository.save(machine);
    }

    public Machine removeProduction(Long machineId, Long productionId) {
        Machine machine = getById(machineId);
        machine.removeProduction(productionId);
        return machineRepository.save(machine);
    }

    public Machine addStoppingPoint(Long machineId, StoppingPointDTO stoppingPointDTO) {
        Machine machine = getById(machineId);
        StoppingPoint stoppingPoint = stoppingPointService.create(stoppingPointDTO);
        machine.addStoppingPoint(stoppingPoint);
        return machineRepository.save(machine);
    }

    public Machine removeStoppingPoint(Long machineId, Long stoppingPointId) {
        Machine machine = getById(machineId);
        machine.removeStoppingPoint(stoppingPointId);
        return machineRepository.save(machine);
    }

}
