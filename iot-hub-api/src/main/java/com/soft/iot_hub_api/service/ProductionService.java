package com.soft.iot_hub_api.service;

import com.soft.iot_hub_api.domain.Production;
import com.soft.iot_hub_api.domain.Production;
import com.soft.iot_hub_api.dto.ProductionDTO;
import com.soft.iot_hub_api.repository.ProductionRepository;
import lombok.AllArgsConstructor;
import org.hibernate.ObjectNotFoundException;
import org.springframework.beans.BeanUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
@AllArgsConstructor
public class ProductionService {

    private final ProductionRepository productionRepository;

    public Production create(ProductionDTO productionDTO) {
        Production production = new Production();
        BeanUtils.copyProperties(productionDTO, production);
        return productionRepository.save(production);
    }

    public Production update(Long id, ProductionDTO productionDTO) throws ObjectNotFoundException {
        Production production = getById(id);
        BeanUtils.copyProperties(productionDTO, production);
        return productionRepository.save(production);
    }

    public Production getById(Long productionId) {
        return productionRepository.findById(productionId).orElseThrow(() -> new ObjectNotFoundException(productionId, "Production"));
    }
    
}
