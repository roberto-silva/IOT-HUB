package com.soft.iot_hub_api.service;

import com.soft.iot_hub_api.domain.Machine;
import com.soft.iot_hub_api.repository.MachineRepository;
import lombok.AllArgsConstructor;
import org.hibernate.ObjectNotFoundException;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class MachineService {

    private final MachineRepository machineRepository;

    public Machine getById(Long machineId) {
        return machineRepository.findById(machineId).orElseThrow(() ->new ObjectNotFoundException(machineId, "Machine"));
    }
}
