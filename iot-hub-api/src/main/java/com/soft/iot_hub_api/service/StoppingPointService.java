package com.soft.iot_hub_api.service;

import com.soft.iot_hub_api.repository.StoppingPointRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class StoppingPointService {

    private final StoppingPointRepository stoppingPointRepository;
}
