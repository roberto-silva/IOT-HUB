package com.soft.iot_hub_api.service;

import com.soft.iot_hub_api.repository.ProductionRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class ProductionService {

    private final ProductionRepository productionRepository;
}
