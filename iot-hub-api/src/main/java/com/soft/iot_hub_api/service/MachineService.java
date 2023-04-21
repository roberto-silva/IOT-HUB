package com.soft.iot_hub_api.service;

import com.soft.iot_hub_api.repository.MachineRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class MachineService {

    private final MachineRepository machineRepository;
}
