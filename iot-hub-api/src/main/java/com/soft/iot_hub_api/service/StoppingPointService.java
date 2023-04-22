package com.soft.iot_hub_api.service;

import com.soft.iot_hub_api.domain.StoppingPoint;
import com.soft.iot_hub_api.dto.StoppingPointDTO;
import com.soft.iot_hub_api.repository.StoppingPointRepository;
import lombok.AllArgsConstructor;
import org.hibernate.ObjectNotFoundException;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class StoppingPointService {

    private final StoppingPointRepository stoppingPointRepository;

    public StoppingPoint create(StoppingPointDTO stoppingPointDTO) {
        StoppingPoint stoppingPoint = new StoppingPoint();
        BeanUtils.copyProperties(stoppingPointDTO, stoppingPoint);
        return stoppingPointRepository.save(stoppingPoint);
    }

    public StoppingPoint update(Long id, StoppingPointDTO stoppingPointDTO) throws ObjectNotFoundException {
        StoppingPoint stoppingPoint = getById(id);
        BeanUtils.copyProperties(stoppingPointDTO, stoppingPoint);
        return stoppingPointRepository.save(stoppingPoint);
    }

    public StoppingPoint getById(Long stoppingPointId) {
        return stoppingPointRepository.findById(stoppingPointId).orElseThrow(() -> new ObjectNotFoundException(stoppingPointId, "StoppingPoint"));
    }
}
