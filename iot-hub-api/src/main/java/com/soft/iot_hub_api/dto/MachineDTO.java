package com.soft.iot_hub_api.dto;

import com.soft.iot_hub_api.domain.Machine;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.BeanUtils;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MachineDTO implements Serializable {

    private Long id;

    private String name;

    private Set<ProductionDTO> productions = new HashSet<>();

    private Set<StoppingPointDTO> stoppingPoints = new HashSet<>();

    private Integer piecesPerMinute;

    private Integer maximumProductionCapacity;

    private Integer workingTime;

    public MachineDTO(Machine machine) {
        BeanUtils.copyProperties(machine, this);
    }
}
